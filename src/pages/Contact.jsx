import { useState } from "react"
import Layout from "./layouts/Layout"
import instagram from "../assets/icons/instagram.svg"
import twitter from "../assets/icons/twitter.svg"
import facebook from "../assets/icons/facebook.svg"
import linkedin from "../assets/icons/linkedin.svg"
import purpleFlareImg from "../assets/images/purple-flare.png"
import gradientStar from "../assets/icons/star-gradient.png"
import axios from "axios"
import {useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  first_name: yup.string().trim().required("First Name is required"),
  email: yup.string().email().trim().required(),
  phone_number: yup.string().min(10, 'Phone number must be at least 10 digits'),
  message: yup.string().trim().required(),
})





const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: '',
    resolver: yupResolver(schema)
  })

async function submitContactForm(data){
  // console.log("data", data)
 const BASE_URL = " https://backend.getlinked.ai/hackathon/contact-form"
  try {
        setIsLoading(true)
        const response = await axios.post(BASE_URL, data);
        console.log(response.data);
        toast("Thank You we have received your message.");
      } catch (err) {
        console.log(err);
        toast("Error sending message.");
      }
      setIsLoading(false)
}
  return (
    <Layout showFooter={false}>
        <section className="relative py-5 overflow-hidden">
        <div className="container mx-auto px-16">
          <img className="absolute bottom-[-50%] right-[-35%] w-[80%] -z-20 opacity-70 rotate-[117deg]" src={purpleFlareImg} alt="" />
          <img className="absolute top-[-15px] left-[4%] opacity-80 w-[50%] h-[80%] -z-20" src={purpleFlareImg} alt="" />
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative flex flex-col justify-center w-full md:w-[30%] font-medium pt-10 pb-5 space-y-4">
              <h1 className="text-3xl text-primaryPink font-semibold font-clashDisplay animate-fadeInLeft">Get in touch</h1>
              <div className="animate-fadeInLeft" style={{animationDelay: "0.5s"}}>
                Contact <br/> Information
              </div>
              <div>
                27,Alara Street<br/> Yaba 100012 <br/>Lagos State
              </div>
              <p>Call Us : 07067981819</p>
              <div>
                We are open from Monday-Friday 08:00am - 05:00pm
              </div>
              <div>
                <div className="text-primaryPink font-medium mb-3">
                  Share On
                </div>
                <div className="flex items-center space-x-4">
                  <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                </div>
              </div>
              <img className="h-4 w-4 absolute top-[-100px] left-[70%]" src={gradientStar} alt="" />
            </div>
            <div className="relative flex flex-col justify-center w-full md:w-[70%] pt-10 pb-5 text-left">
              <div className="p-10 rounded-[12px] bg-[#ffffff08] shadow-contactForm">
                <div className="text-xl text-primaryPink font-bold font-clashDisplay leading-[2] ">
                  Questions or need assistance?
                </div>
                <div className="text-xl text-primaryPink font-bold font-clashDisplay mb-5">
                  Let us know  about it!
                </div>
                <form className="space-y-4 flex flex-col" onSubmit={handleSubmit(submitContactForm)}>
                  <div>
                    <input className="w-full h-14 outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="text" name="" placeholder="First Name" {...register('first_name')}/>
                    { errors.first_name && <span className="text-red-500 text-sm">{errors.first_name.message}</span>}
                  </div>
                  <div>
                    <input className="w-full h-14 outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="email" name="" placeholder="Email" {...register('email')} />
                     {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                  </div>
                  <div>
                    <input className="w-full h-14 outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="text" name="" placeholder="Phone Number" {...register('phone_number')} />
                     {errors.phone_number && <span className="text-red-500 text-sm">{errors.phone_number.message}</span>}
                  </div>
                  <div>
                    <textarea placeholder="Message" className="resize-none w-full h-48 outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" rows="10" cols="" {...register('message')}>

                    </textarea>
                     {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                  </div>
                  <button className='px-5 py-2 w-[40%] self-center bg-btnBgGrad rounded-[4px] hover:scale-[0.98] hover:opacity-80 mr-3' type="submit">{isLoading &&<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>}Submit</button>
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
    </Layout>
  )
}

export default Contact