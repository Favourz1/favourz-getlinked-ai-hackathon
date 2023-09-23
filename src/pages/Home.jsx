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
import champCup from "../assets/images/cup-target.png"
import goldMedal from "../assets/images/gold-medal.png"
import bronzeMedal from "../assets/images/bronze-medal.png"
import silverMedal from "../assets/images/silver-medal.png"
import libertyLogo from "../assets/images/liberty-logo.png"
import libertyPayLogo from "../assets/images/libertyPay-logo.png"
import winwiseLogo from "../assets/images/winwise-logo.png"
import wisperLogo from "../assets/images/wisper-logo.png"
import payboxLogo from "../assets/images/Paybox.png"
import visualplusLogo from "../assets/images/vizual-plus.png"
import privacyImg from "../assets/images/privacy.png"
import { timelineData } from "../data/timelineData"

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
          <div className="flex flex-col md:flex-row items-center gapx-10">
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
                    <div className="flex justify-between text-md font-medium">What happens if I don&apos;t have an idea for a project? <span className="text-primaryPink text-xl pl-6">+</span></div>
                    <div className="mt-3 hidden text-[#808080] text-sm group-focus:flex">
                      <p>We have an idea bank of projects to be worked on. So don&apos;t worry we got you covered</p>
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
      <section className="relative py-5 mb-5">
        <div className="container mx-auto px-16">
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="text-center max-w-[30%]">
              <div className="text-4xl font-semibold font-clashDisplay ">Timeline</div>
              <p className="text-sm flex items-center">Here is the breakdown of the time we anticipate using for the upcoming event.</p>
            </div>
            <div className="max-w-[80%] flex flex-col items-center">
                  <div className="group  relative min-h-[200px] flex items-center justify-center px-10">
                      <div className="group-[.inverted-tree]:border-r-0 group-[.inverted-tree]:border-l-2 group-[.inverted-tree]:after:left-[-15px] relative w-[50%] min-h-[200px] flex flex-col justify-center p-8 border-r-2 border-primaryPink  after:content-['1'] after:absolute after:bg-primaryPink after:flex after:justify-center after:items-center after:top-[50%] after:right-[-15px] after:w-[30px] after:h-[30px] after:rounded-[50%] after:p-3 after:shadow-treeCounter">
                        <div className="text-primaryPink text-lg font-semibold"> Hackathon Announcement</div>
                        <p className="text-sm flex items-center">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                      </div>
                      <div className="text-primaryPink text-lg font-semibold w-[50%] p-8 group-[.inverted-tree]:w-[49.6%] group-[.inverted-tree]:text-right">November 18th 2023</div>
                  </div>
                  <div className="group inverted-tree relative min-h-[200px] flex items-center justify-center px-10">
                      <div className="group-[.inverted-tree]:border-r-0 group-[.inverted-tree]:border-l-2 group-[.inverted-tree]:after:left-[-15px] relative w-[50%] min-h-[200px] flex flex-col justify-center p-8 border-r-2 border-primaryPink  after:content-['2'] after:absolute after:bg-primaryPink after:flex after:justify-center after:items-center after:top-[50%] after:right-[-15px] after:w-[30px] after:h-[30px] after:rounded-[50%] after:p-3 after:shadow-treeCounter">
                        <div className="text-primaryPink text-lg font-semibold"> Teams Registration begins</div>
                        <p className="text-sm flex items-center">Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                      </div>
                      <div className="text-primaryPink text-lg font-semibold w-[50%] p-8 group-[.inverted-tree]:w-[49.6%] group-[.inverted-tree]:text-right">November 18th 2023</div>
                  </div>
                  <div className="group  relative min-h-[200px] flex items-center justify-center px-10">
                      <div className="group-[.inverted-tree]:border-r-0 group-[.inverted-tree]:border-l-2 group-[.inverted-tree]:after:left-[-15px] relative w-[50%] min-h-[200px] flex flex-col justify-center p-8 border-r-2 border-primaryPink  after:content-['3'] after:absolute after:bg-primaryPink after:flex after:justify-center after:items-center after:top-[50%] after:right-[-15px] after:w-[30px] after:h-[30px] after:rounded-[50%] after:p-3 after:shadow-treeCounter">
                        <div className="text-primaryPink text-lg font-semibold"> Teams Registration ends</div>
                        <p className="text-sm flex items-center">Interested Participants are no longer Allowed to register</p>
                      </div>
                      <div className="text-primaryPink text-lg font-semibold w-[50%] p-8 group-[.inverted-tree]:w-[49.6%] group-[.inverted-tree]:text-right">November 18th 2023</div>
                  </div>
                  <div className="group inverted-tree relative min-h-[200px] flex items-center justify-center px-10">
                      <div className="group-[.inverted-tree]:border-r-0 group-[.inverted-tree]:border-l-2 group-[.inverted-tree]:after:left-[-15px] relative w-[50%] min-h-[200px] flex flex-col justify-center p-8 border-r-2 border-primaryPink  after:content-['4'] after:absolute after:bg-primaryPink after:flex after:justify-center after:items-center after:top-[50%] after:right-[-15px] after:w-[30px] after:h-[30px] after:rounded-[50%] after:p-3 after:shadow-treeCounter">
                        <div className="text-primaryPink text-lg font-semibold">Interested Participants are no longer Allowed to register</div>
                        <p className="text-sm flex items-center">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                      </div>
                      <div className="text-primaryPink text-lg font-semibold w-[50%] p-8 group-[.inverted-tree]:w-[49.6%] group-[.inverted-tree]:text-right">November 18th 2023</div>
                  </div>
                  <div className="group  relative min-h-[200px] flex items-center justify-center px-10">
                      <div className="group-[.inverted-tree]:border-r-0 group-[.inverted-tree]:border-l-2 group-[.inverted-tree]:after:left-[-15px] relative w-[50%] min-h-[200px] flex flex-col justify-center p-8 border-r-2 border-primaryPink  after:content-['5'] after:absolute after:bg-primaryPink after:flex after:justify-center after:items-center after:top-[50%] after:right-[-15px] after:w-[30px] after:h-[30px] after:rounded-[50%] after:p-3 after:shadow-treeCounter">
                        <div className="text-primaryPink text-lg font-semibold">Getlinked Hackathon 1.0 Offically Begins</div>
                        <p className="text-sm flex items-center">Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                      </div>
                      <div className="text-primaryPink text-lg font-semibold w-[50%] p-8 group-[.inverted-tree]:w-[49.6%] group-[.inverted-tree]:text-right">November 18th 2023</div>
                  </div>
                  <div className="group inverted-tree relative min-h-[200px] flex items-center justify-center px-10">
                      <div className="group-[.inverted-tree]:border-r-0 group-[.inverted-tree]:border-l-2 group-[.inverted-tree]:after:left-[-15px] relative w-[50%] min-h-[200px] flex flex-col justify-center p-8 border-r-2 border-primaryPink  after:content-['6'] after:absolute after:bg-primaryPink after:flex after:justify-center after:items-center after:top-[50%] after:right-[-15px] after:w-[30px] after:h-[30px] after:rounded-[50%] after:p-3 after:shadow-treeCounter before:content-[''] before:absolute before:bg-[#150E28] before:flex before:justify-center before:items-center before:top-[60%] before:left-[-20px] before:w-[40px] before:h-[80px] before:p-3 before:shadow-treeCounter">
                        <div className="text-primaryPink text-lg font-semibold">Demo Day</div>
                        <p className="text-sm flex items-center">Teams get the opportunity to pitch their projects to judges.The winner of the hackathon will also be announced on this day</p>
                      </div>
                      <div className="text-primaryPink text-lg font-semibold w-[50%] p-8 group-[.inverted-tree]:w-[49.6%] group-[.inverted-tree]:text-right">November 18th 2023</div>
                  </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-5 mb-5">
        <div className="container mx-auto px-16">
         <img className="absolute bottom-[-50%] right-[-35%] w-[80%] -z-20 opacity-70 rotate-[117deg]" src={purpleFlareImg} alt="" />
          <img className="absolute top-[-15px] left-[4%] opacity-80 w-[50%] h-[80%] -z-20" src={purpleFlareImg} alt="" />
              <div className="ml-[50%] mb-10">
                <div className="text-4xl font-semibold font-clashDisplay">Prizes and</div>
                <div className="text-primaryPink text-4xl  font-semibold font-clashDisplay leading-[2]">Rewards</div>
                <p className="text-sm leading-7 max-w-[60%]">Highlight of the prizes or rewards for winners and for participants</p>
              </div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="relative flex flex-col justify-center items-center w-full md:w-[40%] pt-10 pb-5">
              <img className="w-[90%]" src={champCup} alt="Champions Cup" />
              <img className="absolute top-[10%] left-[23%] h-5 w-5" src={purpleStar} alt="" />
            </div>
            <div className="relative flex flex-col justify-start w-full md:w-[60%] pt-10 pb-5 text-left">
              
              <div className="relative flex justify-center items-center mt-36 space-x-6">
              <img className="absolute top-[-80%] left-[50px] h-5 w-5" src={whiteStar} alt="" />
              <img className="absolute top-[-40%] right-[8px] h-5 w-5" src={whiteStar} alt="" />
              <img className="absolute bottom-[-10%] right-[30%] h-5 w-5" src={grayStar} alt="" />
                <div className="flex flex-col min-w-[200px] min-h-[250px] justify-end items-center text-center relative p-4 rounded-[8px] hover:shadow-xl border border-primaryPink bg-[#d434fe1f]">
                  <img className="absolute bottom-[80%] left-[6px] scale-[1.2]" src={silverMedal} alt="Gold Medal" />
                    <div className="mb-3"><span className="text-2xl font-bold">2nd</span><br/><span  className="text-md font-semibold">Runner</span></div>
                    <p className="text-xl text-primaryPink font-semibold">N300,000</p>
                </div>
                <div className="flex flex-col min-w-[200px] min-h-[280px] justify-end items-center text-center relative p-4 rounded-[8px] hover:shadow-xl border border-[#903AFF] bg-[#903aff1f]">
                  <img className="absolute bottom-[80%] left-[2px] scale-[1.35]" src={goldMedal} alt="Gold Medal" />
                    <div className="mb-3"><span className="text-2xl font-bold">1st</span><br/><span  className="text-md font-semibold">Runner</span></div>
                    <p className="text-xl text-[#903AFF] font-semibold">N400,000</p>
                </div>
                <div className="flex flex-col min-w-[200px] min-h-[220px] justify-end items-center text-center relative p-4 rounded-[8px] hover:shadow-xl border border-primaryPink bg-[#d434fe1f]">
                  <img className="absolute bottom-[80%] left-[10px]" src={bronzeMedal} alt="Gold Medal" />
                    <div className="mb-3"><span className="text-2xl font-bold">3rd</span><br/><span  className="text-md font-semibold">Runner</span></div>
                    <p className="text-xl text-primaryPink font-semibold">N150,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-5 mb-5">
        <div className="container mx-auto px-16">
         <img className="absolute bottom-[-50%] right-[-35%] w-[80%] -z-20 opacity-70 rotate-[117deg]" src={purpleFlareImg} alt="" />
          <img className="absolute top-[-15px] left-[4%] opacity-80 w-[50%] h-[80%] -z-20" src={purpleFlareImg} alt="" />
              <div className="flex flex-col justify-center items-center text-center mb-6">
                <div className="text-4xl font-semibold font-clashDisplay">Partners and Sponsors</div>
                <p className="text-sm leading-7 max-w-[60%] text-center">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
              </div>
          <div className="flex justify-center items-center rounded-[5px] border border-primaryPink bg-[#ffffff03] p-10">
            <div className="grid grid-cols-3 gap-10">
              <div className="relative max-w-[250px] p-6 flex justify-center items-center"> <img  src={libertyLogo} alt="" /></div>
              <div className="relative max-w-[250px] p-6 flex justify-center items-center border-x  border-x-primaryPink"> <img  src={libertyPayLogo} alt="" /></div>
              <div className="relative max-w-[250px] p-6 flex justify-center items-center"> <img  src={winwiseLogo} alt="" /></div>
              <div className="relative  max-w-[250px] p-6 flex justify-center items-center before:content-[''] before:w-full before:absolute before:top-[-22px] before:left-0 before:h-[1px] before:bg-primaryPink"> <img  src={wisperLogo} alt="" /></div>
              <div className="relative max-w-[250px] p-6 flex justify-center items-center border-x border-x-primaryPink before:content-[''] before:w-[80%] before:absolute before:top-[-22px] before:left-[10%] before:h-[1px] before:bg-primaryPink"> <img src={payboxLogo} alt="" /></div>
              <div className="relative max-w-[250px] p-6 flex justify-center items-center  before:content-[''] before:w-full before:absolute before:top-[-22px] before:left-0 before:h-[1px] before:bg-primaryPink"> <img  src={visualplusLogo} alt="" /></div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-5 mb-5 overflow-hidden">
        <div className="container mx-auto px-16">
          <img className="absolute  top-[25%] left-[25%] w-5 h-5" src={grayStar} alt="" />
          <img className="absolute bottom-[-35%] left-[-35%] w-[80%] -z-20 rotate-[270deg]" src={purpleFlareImg} alt="" />
          <img className="absolute bottom-[-35%] left-[-35%]" src={gradientStar} alt="" />
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative flex flex-col justify-center w-full md:w-[50%] pt-10 pb-5 text-left">
              <div className="text-4xl font-semibold font-clashDisplay ">Privacy Policy and</div>
              <div className="text-primaryPink text-4xl  font-semibold font-clashDisplay leading-[2] mb-4">Terms</div>
              <p className="text-sm text-[#ffffffbf] mb-8">Last updated on September 12, 2023</p>
              <p className="text-sm leading-7 mb-10">Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
              <div className="p-12 border border-primaryPink flex flex-col items-center rounded-[5px] bg-[#d9d9d908] space-y-4">
                <div className="text-sm leading-[2]">
                  At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
                </div>
                <div className="text-primaryPink font-semibold self-start">Licensing Policy</div>
                <div className="font-semibold text-left self-start"> Here are terms of our Standard License:</div>
                <ul className="ml-9 relative leading-9 space-y-6">
                  <li className="relative before:bg-checkMark before:w-10 before:h-10 before:bg-no-repeat before:top-[10px] before:left-[-25px] before:absolute">The Standard License grants you a non-exclusive right to navigate and register for our event</li>
                  <li className="relative before:bg-checkMark before:w-10 before:h-10 before:bg-no-repeat before:top-[10px] before:left-[-25px] before:absolute">You are licensed to use the item available at any free source sites, for your project development</li>
                </ul>
              </div>
            </div>
            <div className="relative flex flex-col justify-center items-center w-full md:w-[50%] pt-10 pb-5">
              <img className="w-[90%]" src={privacyImg} alt="The Big Idea" />
            </div>
          </div>
        </div>
      </section>
</Layout>
  )
}

export default Home
