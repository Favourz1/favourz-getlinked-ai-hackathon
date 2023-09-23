import Layout from "./layouts/Layout"
import instagram from "../assets/icons/instagram.svg"
import twitter from "../assets/icons/twitter.svg"
import facebook from "../assets/icons/facebook.svg"
import linkedin from "../assets/icons/linkedin.svg"
import purpleFlareImg from "../assets/images/purple-flare.png"



const Contact = () => {
  return (
    <Layout showFooter={false}>
        <section className="relative py-5 overflow-hidden">
        <div className="container mx-auto px-16">
          <img className="absolute bottom-[-50%] right-[-35%] w-[80%] -z-20 opacity-70 rotate-[117deg]" src={purpleFlareImg} alt="" />
          <img className="absolute top-[-15px] left-[4%] opacity-80 w-[50%] h-[80%] -z-20" src={purpleFlareImg} alt="" />
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative flex flex-col justify-center w-full md:w-[30%] font-medium pt-10 pb-5 space-y-4">
              <h1 className="text-3xl text-primaryPink font-semibold font-clashDisplay ">Get in touch</h1>
              <div>
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
            </div>
            <div className="relative flex flex-col justify-center w-full md:w-[70%] pt-10 pb-5 text-left">
              <div className="p-10 rounded-[12px] bg-[#ffffff08] shadow-contactForm">
                <div className="text-xl text-primaryPink font-bold font-clashDisplay leading-[2] ">
                  Questions or need assistance?
                </div>
                <div className="text-xl text-primaryPink font-bold font-clashDisplay mb-5">
                  Let us know  about it!
                </div>
                <form className="space-y-4 flex flex-col">
                  <div>
                    <input className="w-full h-14 outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="text" name="" placeholder="First Name" />
                     <span className="text-red-500 text-sm"></span>
                  </div>
                  <div>
                    <input className="w-full h-14 outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="email" name="" placeholder="Email" />
                     <span className="text-red-500 text-sm"></span>
                  </div>
                  <div>
                    <textarea placeholder="Message" className="resize-none w-full h-48 outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" rows="10" cols="">

                    </textarea>
                    {/* <input className="w-full h-48 outline-none bg-[#ffffff08] rounded border border-gray-700 focus:border-white shadow-input px-6 py-3" type="" name="" placeholder="Message" /> */}
                     <span className="text-red-500 text-sm"></span>
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

export default Contact