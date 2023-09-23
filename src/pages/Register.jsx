import { useState, useEffect } from "react"
import manWithDesk from "../assets/images/man-with-desk.png"
import purpleFlareImg from "../assets/images/purple-flare.png"
import peopleWalking from "../assets/images/people-walking.png"
import axios from "axios"
import {useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"
import backIcon from "../assets/icons/back-circle.png"


const schema = yup.object().shape({
  email: yup.string().email().trim().required(),
  team_name: yup.string().trim().required("Team Name is required"),
  phone_number: yup.string().min(10, 'Phone number must at least 10 digits'),
  group_size: yup.string().trim(),
  project_topic: yup.string().trim().required("Project Topic is required"),
  category: yup.string().trim(),
  privacy_poclicy_accepted: yup.boolean().required("Please accept terms and conditions")
})


const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState();

  useEffect(()=>{
    async function fetchData(){
       const BASE_URL = " https://backend.getlinked.ai/hackathon/categories-list"
       try {
        const response = await axios.get(BASE_URL);
        console.log(response.data)
        setCategories(response.data)
      } catch (err) {
        console.log(err);
        toast("Error getting categories.");
      }
    }
    fetchData()
  },[])

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: '',
    resolver: yupResolver(schema)
  })

  async function handleRegisterForm(data){
     const BASE_URL = " https://backend.getlinked.ai/hackathon/registration"
    console.log("data", data)
    try {
        setIsLoading(true)
        const response = await axios.post(BASE_URL, data);
        console.log(response.data);
        toast("Thank Your team have been registered!");
      } catch (err) {
        console.log(err);
        toast("Error sending message.");
      }
      setIsLoading(false)
  }

    return (
      <>
        <section className="relative py-5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-16">
          <img className="absolute bottom-[-50%] right-[-35%] w-[80%] -z-20 opacity-70 rotate-[117deg]" src={purpleFlareImg} alt="" />
          <img className="absolute top-[-15px] left-[-24%] md:left-[4%] opacity-80 w-auto md:w-[50%] h-[50%] h-[80%] -z-20" src={purpleFlareImg} alt="" />
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative hidden md:flex flex-col justify-center items-center md:items-start w-full md:w-[40%] font-medium pt-10 pb-5 space-y-4">
              <img src={manWithDesk} alt="" className="animate-fadeInLeft w-[8.8rem] md:w-auto h-[10.6rem] md:h-auto"/>
            </div>
            <div className="relative flex flex-col justify-center w-full md:w-[60%] pt-10 pb-5 text-left">
              <Link to="/">
                <img className="h-8 w-8" src={backIcon} alt="" />
              </Link>
              <div className="p-8 rounded-[12px] bg-transparent md:bg-[#ffffff08] shadow-none md:shadow-contactForm animate-fadeInUp">
                <div className="text-3xl text-primaryPink font-bold font-clashDisplay leading-[2] ">
                  Register
                </div>
                <img src={manWithDesk} alt="" className="flex md:hidden animate-fadeInLeft w-[8.8rem] md:w-auto h-[10.6rem] md:h-auto"/>
                <div className="text-md flex items-baseline font-medium mb-5">
                  Be part of this movement! <img src={peopleWalking} alt="" />
                </div>
                <div className="text-xl flex items-baseline mb-5 uppercase">
                  Create your account
                </div>
                <form className="space-y-4 flex flex-col" onSubmit={handleSubmit(handleRegisterForm)}>
                 <div className="flex flex-col md:flex-row justify-center items-center w-full space-y-4 md:space-x-4 mb-4">
                   <div className="w-full md:w-1/2  flex flex-col">
                    <label className="text-sm font-medium mb-3">Team Name</label>
                     <input className="w-full  outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="text" name="" placeholder="Enter the name of your group" {...register('team_name')} />
                     {errors.team_name &&  <span className="text-red-500 text-sm">{errors.team_name.message}</span>}
                   </div>
                   <div className="w-full md:w-1/2  flex flex-col">
                    <label className="text-sm font-medium mb-3">Phone</label>
                     <input className="w-full  outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="text" name="" placeholder="Enter your phone number" {...register('phone_number')}/>
                      {errors.phone_number && <span className="text-red-500 text-sm">{errors.phone_number.message}</span>}
                   </div>
                 </div>
                 <div className="flex flex-col md:flex-row justify-center items-center w-full space-y-4 md:space-x-4 mb-4">
                   <div className="w-full md:w-1/2 flex flex-col">
                    <label className="text-sm font-medium mb-3">Email</label>
                     <input className="w-full  outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="email" name="" placeholder="Enter your email address" {...register('email')}/>
                      {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                   </div>
                   <div className="w-full md:w-1/2 flex flex-col">
                    <label className="text-sm font-medium mb-3">Project Topic</label>
                     <input className="w-full  outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="text" name="" placeholder="What is your group project topic" {...register('project_topic')}/>
                     {errors.project_topic && <span className="text-red-500 text-sm">{errors.project_topic.message}</span>}
                   </div>
                 </div>
                 <div className="flex  justify-center items-center w-full space-x-4 mb-4">
                   <div className="w-1/2 flex flex-col">
                    <label className="text-sm font-medium mb-3">Category</label>
                    <select className="w-full  outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" {...register('category')}>
                      <option className="bg-getlinkedPurple text-white font-medium font-montserrat hover:bg-getlinkedPurple hover:text-gray-300" value="" disabled selected>Select your category</option>
                      {categories && categories.map((item)=>(
                        <option key={item.id} className="bg-getlinkedPurple text-white font-medium font-montserrat hover:bg-getlinkedPurple hover:text-gray-300" value={item.id}>{item.name}</option>
                      ))}
                    </select>
                      {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
                   </div>
                   <div className="w-1/2 flex flex-col">
                    <label className="text-sm font-medium mb-3">Group Size</label>
                     <select className="w-full  outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" {...register('group_size')}>
                      <option className="bg-getlinkedPurple text-white font-medium font-montserrat hover:bg-getlinkedPurple hover:text-gray-300"  disabled selected>Select</option>
                      <option className="bg-getlinkedPurple text-white font-medium font-montserrat hover:bg-getlinkedPurple hover:text-gray-300" value={2}>2</option>
                      <option className="bg-getlinkedPurple text-white font-medium font-montserrat hover:bg-getlinkedPurple hover:text-gray-300" value={5}>5</option>
                      <option className="bg-getlinkedPurple text-white font-medium font-montserrat hover:bg-getlinkedPurple hover:text-gray-300" value={10}>10</option>
                      <option className="bg-getlinkedPurple text-white font-medium font-montserrat hover:bg-getlinkedPurple hover:text-gray-300" value={15}>15</option>
                    </select>
                      {errors.group_size && <span className="text-red-500 text-sm">{errors.group_size.message}</span>}
                   </div>
                 </div>
                 <p className="text-xs text-primaryPink">Please review your registration details before submitting</p>
                 <div className="flex space-x-2">
                  <input className="outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input" type="checkbox" name="" value="" {...register('privacy_poclicy_accepted')}/>
                  <p className="text-xs font-medium">I agree with the event terms and conditions  and privacy policy</p>
                 </div>
                 {errors.privacy_poclicy_accepted && <span className="text-red-500 text-sm">{errors.privacy_poclicy_accepted.message}</span>}
                  <button className='px-5 py-2 w-full self-center bg-btnBgGrad rounded-[4px] hover:scale-[0.98] hover:opacity-80' type="submit">{isLoading &&<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>}Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </>
  )
}

export default Register