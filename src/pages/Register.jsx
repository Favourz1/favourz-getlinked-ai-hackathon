import manWithDesk from "../assets/images/man-with-desk.png"
import purpleFlareImg from "../assets/images/purple-flare.png"
import Layout from "./layouts/Layout"
import peopleWalking from "../assets/images/people-walking.png"


const Register = () => {
    return (
      <Layout showFooter={false}>
        <section className="relative py-5 overflow-hidden">
        <div className="container mx-auto px-16">
          <img className="absolute bottom-[-50%] right-[-35%] w-[80%] -z-20 opacity-70 rotate-[117deg]" src={purpleFlareImg} alt="" />
          <img className="absolute top-[-15px] left-[4%] opacity-80 w-[50%] h-[80%] -z-20" src={purpleFlareImg} alt="" />
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative flex flex-col justify-center w-full md:w-[40%] font-medium pt-10 pb-5 space-y-4">
              <img src={manWithDesk} alt="" />
            </div>
            <div className="relative flex flex-col justify-center w-full md:w-[60%] pt-10 pb-5 text-left">
              <div className="p-10 rounded-[12px] bg-[#ffffff08] shadow-contactForm">
                <div className="text-3xl text-primaryPink font-bold font-clashDisplay leading-[2] ">
                  Register
                </div>
                <div className="text-md flex items-baseline font-medium mb-5">
                  Be part of this movement! <img src={peopleWalking} alt="" />
                </div>
                <div className="text-2xl flex items-baseline mb-5 uppercase">
                  Create your account
                </div>
                <form className="space-y-4 flex flex-col">
                 <div className="flex justify-center items-center w-full space-x-4 mb-4">
                   <div className="w-1/2 flex flex-col">
                    <label className="text-sm font-medium mb-3">Team Name</label>
                     <input className="w-full h-14 outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="text" name="" placeholder="First Name" />
                      <span className="text-red-500 text-sm"></span>
                   </div>
                   <div className="w-1/2 flex flex-col">
                    <label className="text-sm font-medium mb-3">Phone</label>
                     <input className="w-full h-14 outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="email" name="" placeholder="Email" />
                      <span className="text-red-500 text-sm"></span>
                   </div>
                 </div>
                 <div className="flex justify-center items-center w-full space-x-4 mb-4">
                   <div className="w-1/2 flex flex-col">
                    <label className="text-sm font-medium mb-3">Team Name</label>
                     <input className="w-full h-14 outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="text" name="" placeholder="First Name" />
                      <span className="text-red-500 text-sm"></span>
                   </div>
                   <div className="w-1/2 flex flex-col">
                    <label className="text-sm font-medium mb-3">Phone</label>
                     <input className="w-full h-14 outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="email" name="" placeholder="Email" />
                      <span className="text-red-500 text-sm"></span>
                   </div>
                 </div>
                 <div className="flex justify-center items-center w-full space-x-4 mb-4">
                   <div className="w-1/2 flex flex-col">
                    <label className="text-sm font-medium mb-3">Team Name</label>
                     <input className="w-full h-14 outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="text" name="" placeholder="First Name" />
                      <span className="text-red-500 text-sm"></span>
                   </div>
                   <div className="w-1/2 flex flex-col">
                    <label className="text-sm font-medium mb-3">Phone</label>
                     <input className="w-full h-14 outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="email" name="" placeholder="Email" />
                      <span className="text-red-500 text-sm"></span>
                   </div>
                 </div>
                  <button className='px-5 py-2 w-[40%] self-center bg-btnBgGrad rounded-[4px] hover:scale-[0.98] hover:opacity-80' type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Register