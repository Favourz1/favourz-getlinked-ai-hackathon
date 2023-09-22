import Layout from "./layouts/Layout"
import chainSvg from "../assets/icons/chain.svg"
import blastSvg from "../assets/icons/blast.svg"
import bulbSvg from "../assets/icons/bulb-icon.svg"
import purpleFlareImg from "../assets/images/purple-flare.png"
import manWithGlass from "../assets/images/man-with-glasses.png"
import heroGlobe from "../assets/images/hero-globe.png"
import whiteStar from "../assets/icons/star-white.png"
import grayStar from "../assets/icons/star-gray.png"
import purpleStar from "../assets/icons/star-purple.png"
import gradientStar from "../assets/icons/star-gradient.png"
import bigIdea from "../assets/images/big-idea.png"
import curvedArrow from "../assets/images/curved-arrow.png"
import girlWithLinkedAi from "../assets/images/girl-with-linked-ai.png"
import peopleWithPieChart from "../assets/images/people-pie.png"
import manThinking from "../assets/images/man-thinking.png"

const Home = () => {
  return (
    <Layout>
      <section className="relative pt-5 mb-5 min-h-[calc(100vh -90px)]" style={{maxHeight: 'calc(100vh - 100px)'}}>
        <div className="container mx-auto px-16">
          <div className="flex flex-col">
            <p className="relative text-lg  text-end font-semibold italic after:bg-heroLineCurve after:absolute after:top-[60%] after:right-0 after:h-[30px] after:w-[400px] after:bg-no-repeat after:bg-right after:bg-30% after:animate-[fadeInRight_0.5s_0.2s_ease_forwards]">Igniting a Revolution in HR Innovation</p>
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center w-full md:w-[40%] py-6 pt-10">
                <div className="flex relative flex-col justify-center text-left mb-7">
                  <h1 className="text-white text-6xl font-semibold font-clashDisplay">getlinked Tech</h1>
                  <h1 className="flex text-white text-5xl font-semibold font-clashDisplay">Hackathon  &nbsp;<span className="text-primaryPink"> 1.0</span> <span className="flex"><img className="w-14 h-14" src={chainSvg} alt="chain" /><img className="w-14 h-14" src={blastSvg} alt="blast icon" /></span></h1>
                  <p className="text-md">Participate in getlinked tech Hackathon 2023 stand
                    a chance to win a Big prize</p>
                    <img className="absolute top-[-30px] right-[10%]  w-10 h-10" src={bulbSvg} alt="bulb" />
                    <img className="absolute top-[-310px] right-[5px] bg-blend-hard-light -z-20" src={purpleFlareImg} alt="" style={{background: '-155.25px -155px / 114.411% 118.9% no-repeat'}}/>
                    <img className="absolute top-[-130px] left-[10%] h-5 w-5 z-20" src={whiteStar} alt="" />
                </div>
                <button className='px-5 py-2 mb-16 max-w-[120px] bg-btnBgGrad rounded-[4px] hover:scale-[0.98] hover:opacity-80'>Register</button>
                <p className="font-unica text-5xl">00<sub className="text-sm">H</sub>   00<sub className="text-sm">M</sub>   00<sub className="text-sm">S</sub></p>
              </div>
              <div className="relative flex justify-center items-center w-[60%] pt-6">
                <img className=" grayscale -z-20" src={manWithGlass} alt="Man Exploring getLinked AI" style={{maxHeight: 'calc(100vh - (100px + 55px))'}}/>
                <img className="absolute top-[20px] left-[10%] w-[78%]" src={heroGlobe} alt="Globe" />
                <img className="absolute top-[-100px] right-[-100px] w-[80%] -z-20 opacity-70 rotate-[238deg]" src={purpleFlareImg} alt="Globe" />
                <img className="absolute top-[15%] left-[13%] h-4 w-4 z-20" src={grayStar} alt="" />
                <img className="absolute bottom-[15%] left-[-25%] h-4 w-4 z-20" src={grayStar} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-5 mb-5">
        <div className="container mx-auto px-16">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative flex flex-col justify-center items-center w-full md:w-[50%] pt-10 pb-5">
              <img className="w-[80%]" src={bigIdea} alt="The Big Idea" />
              <img className="absolute  bottom-[-8px] right-[12%] h-11 w-12" src={curvedArrow} alt="" />
              <img className="absolute  top-[30%] left-0 h-5 w-5" src={gradientStar} alt="" />
            </div>
            <div className="relative flex flex-col justify-center w-full md:w-[50%] pt-10 pb-5 text-left">
              <div className="text-4xl font-semibold font-clashDisplay ">Introduction to getlinked</div>
              <div className="text-primaryPink text-4xl  font-semibold font-clashDisplay leading-[2]">tech Hackathon 1.0</div>
              <p className="text-sm leading-7">Our tech hackathon is a melting pot of visionaries, and its purpose is as
                  clear as day: to shape the future. Whether you&apos;re a coding genius, a 
                  design maverick, or a concept wizard, you&apos;ll have the chance to transform 
                  your ideas into reality. Solving real-world problems, pushing the boundaries
                  of technology, and creating solutions that can change the world,
                  that&apos;s what we&apos;re all about!</p>
                  <img className="absolute  top-[25%] right-0 w-5 h-5" src={purpleStar} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-5 mb-5">
        <div className="container mx-auto px-16">
          <img className="absolute  top-[25%] left-[25%] w-5 h-5" src={grayStar} alt="" />
          <img className="absolute bottom-[-50%] right-[-35%] w-[80%] -z-20 opacity-70 rotate-[117deg]" src={purpleFlareImg} alt="" />
          <img className="absolute top-[-15px] left-[4%] opacity-80 w-[50%] h-[80%] -z-20" src={purpleFlareImg} alt="" />
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative flex flex-col justify-center w-full md:w-[50%] pt-10 pb-5 text-left">
              <div className="text-4xl font-semibold font-clashDisplay ">Rules and</div>
              <div className="text-primaryPink text-4xl  font-semibold font-clashDisplay leading-[2]">Guidelines</div>
              <p className="text-sm leading-7">Our tech hackathon is a melting pot of visionaries, and its purpose is as
                  clear as day: to shape the future. Whether you&apos;re a coding genius, a 
                  design maverick, or a concept wizard, you&apos;ll have the chance to transform 
                  your ideas into reality. Solving real-world problems, pushing the boundaries
                  of technology, and creating solutions that can change the world,
                  that&apos;s what we&apos;re all about!</p>
            </div>
            <div className="relative flex flex-col justify-center items-center w-full md:w-[50%] pt-10 pb-5">
              <img className="w-[90%]" src={girlWithLinkedAi} alt="The Big Idea" />
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-5 mb-5">
        <div className="container mx-auto px-16">
              <img className="absolute bottom-[-5%] left-[-20%] rotate-[270deg]" src={purpleFlareImg} alt="" />
              <img className="absolute bottom-[-29%] right-[-23%] w-[60%] rotate-[90deg]" src={purpleFlareImg} alt="" />
          <div className="flex flex-col md:flex-row gap-10">
            <div className="relative flex flex-col justify-center items-center w-full md:w-[50%] pt-10 pb-5">
              <img className="w-[90%]" src={peopleWithPieChart} alt="People happy with getLinkedAi result" />
              <img className="absolute top-[10%] left-[23%] h-5 w-5" src={purpleStar} alt="" />
            </div>
            <div className="relative flex flex-col justify-start w-full md:w-[50%] pt-10 pb-5 text-left">
              <div className="text-4xl font-semibold font-clashDisplay ">Judging Criteria</div>
              <div className="text-primaryPink text-4xl  font-semibold font-clashDisplay leading-[2]">Key Attributes</div>
              <div className="flex flex-col text-sm leading-7 space-y-3 mb-5">
                <p><span className="text-primaryPink font-medium">Innovation and Creativity: </span>  Evaluate the uniqueness and creativity of the
                  solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                <p><span className="text-primaryPink font-medium">Functionality: </span> Assess how well the solution works. Does it perform its 
                  intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</p>
                <p><span className="text-primaryPink font-medium">Impact and Relevance: </span> Determine the potential impact of the solution 
                  in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>
                <p><span className="text-primaryPink font-medium">Technical Complexity: </span> Evaluate the technical sophistication of the solution.  Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</p>
                <p><span className="text-primaryPink font-medium">Adherence to Hackathon Rules: </span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>
              </div>
              <button className='px-5 py-2 bg-btnBgGrad rounded-[4px] max-w-[150px] hover:scale-95 hover:opacity-90'>Read More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-5 mb-5">
        <div className="container mx-auto px-16">
          <img className="absolute  top-[0] left-[5%] w-5 h-5" src={purpleStar} alt="" />
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative flex flex-col justify-center w-full md:w-[50%] pt-10 pb-5 text-left">
              <div className="text-4xl font-semibold font-clashDisplay ">Frequently Asked</div>
              <div className="text-primaryPink text-4xl  font-semibold font-clashDisplay leading-[2]">Questions</div>
              <p className="text-sm max-w-[65%] mb-5">We got answers to the questions that you might want to ask about <span className="font-semibold">getlinked Hackathon 1.0</span></p>
              <div className="flex items-center justify-center">

                <div className="w-full max-w-screen-sm">
                  <button className="w-full border-b-2 border-primaryPink pb-4 text-left group focus:outline-none">
                    <div className="flex justify-between text-md font-medium">Can I work on a project I started before the hackathon?  <span className="text-primaryPink text-xl pl-6">+</span></div>
                    <div className="mt-3 hidden text-[#808080] text-sm group-focus:flex">
                      <p>Yes, you can. We are currently on our pre-hackathon where we had over 5000+ registrations.</p>
                    </div>
                  </button>
                  <button className="w-full border-b-2 border-primaryPink pb-4 text-left group mt-6 focus:outline-none">
                    <div className="flex justify-between text-md font-medium">What happens if I need help during the hackathon? <span className="text-primaryPink text-xl pl-6">+</span></div>
                    <div className="mt-3 hidden text-[#808080] text-sm group-focus:flex">
                      <p>We have a vibrant community of 2k+ on telegram and 4k+ on twitter where you can get any questions answered. So do well to check our page.</p>
                    </div>
                  </button>
                  <button className="w-full border-b-2 border-primaryPink pb-4 text-left group mt-6 focus:outline-none">
                    <div className="flex justify-between text-md font-medium">What happens if I don't have an idea for a project? <span className="text-primaryPink text-xl pl-6">+</span></div>
                    <div className="mt-3 hidden text-[#808080] text-sm group-focus:flex">
                      <p>We have an idea bank of projects to be worked on. So don't worry we got you covered</p>
                    </div>
                  </button>
                  <button className="w-full border-b-2 border-primaryPink pb-4 text-left group mt-6 focus:outline-none">
                    <div className="flex justify-between text-md font-medium">Can I join a team or do I have to come with one? <span className="text-primaryPink text-xl pl-6">+</span></div>
                    <div className="mt-3 hidden text-[#808080] text-sm group-focus:flex">
                      <p>You come with one. You can also meet new friends on our active telegram community to create one. </p>
                    </div>
                  </button>
                  <button className="w-full border-b-2 border-primaryPink pb-4 text-left group mt-6 focus:outline-none">
                    <div className="flex justify-between text-md font-medium">What happens after the hackathon ends? <span className="text-primaryPink text-xl pl-6">+</span></div>
                    <div className="mt-3 hidden text-[#808080] text-sm group-focus:flex">
                      <p>The pre hackathon winner would be announced on Tuesday, 26<sup>th</sup> September 2023.</p>
                    </div>
                  </button>
                  <button className="w-full border-b-2 border-primaryPink pb-4 text-left group mt-6 focus:outline-none">
                    <div className="flex justify-between text-md font-medium">Can I work on a project I started before the hackathon? <span className="text-primaryPink text-xl pl-6">+</span></div>
                    <div className="mt-3 hidden text-[#808080] text-sm group-focus:flex">
                      <p>Yes, you can. We try not to limit what your creativity can achieve.</p>
                    </div>
                  </button>
                </div>

              </div>
            </div>
            <div className="relative flex flex-col justify-center items-center w-full md:w-[50%] pt-10 pb-5">
              <img className="w-[90%]" src={manThinking} alt="The Big Idea" />
            </div>
          </div>
        </div>
      </section>
</Layout>
  )
}

export default Home