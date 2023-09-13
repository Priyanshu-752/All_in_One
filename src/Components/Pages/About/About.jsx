import React, { useEffect, useRef } from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import { useAnimation, useInView, motion } from "framer-motion";
import TeamImage from '../../../images/Team/team1.png'
import TeamMember1 from "../../../images/Team/teamMember1.jpeg";
import {VscGithubAlt} from 'react-icons/vsc'
import {TfiTwitter} from 'react-icons/tfi'
import {RxInstagramLogo} from 'react-icons/rx'

const About = () => {
    const { innerWidth: Width } = window;
    const ref = useRef();
    const isInView = useInView(ref);
    const mainControlls = useAnimation();
    useEffect(() => {
      if (isInView) {
        mainControlls.start("visible");
      }
    }, [isInView]);
  return (
    <div>
      <Navbar />
      <div className="max-w-screen overflow-hidden font-poppins">
        <div className="sm:h-screen h-[80rem] -mb-20 sm:mb-0 bg-gradient-to-b from-gray-100/10 to-gray-200/50 pt-20">
          <div className="mt-20">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-center text-center"
            >
              <h1 className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-extrabold text-[3rem]">
                Who are wee and whay are wee so good ?
              </h1>
            </motion.div>
            <div className="sm:flex sm:justify-between sm:mr-[10%] sm:mt-20 mt-10 ml-10">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:w-[50%] w-[90%] mb-10 sm:mb-0"
              >
                <img
                  alt="imageAbout"
                  src={TeamImage}
                  className="rounded-2xl sm:toas:translate-x-[200px] sm:taos:opacity-0 sm:hover:-translate-y-2 sm:transition sm:ease-in-out duration-300 sm:hover:drop-shadow-xl sm:z-20 sm:mx-auto shadow-lg "
                />
              </motion.div>
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: 75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:flex sm:justify-center text-center sm:mt-20"
              >
                <h1 className="text-xl sm:text-4xl sm:font-extrabold font-bold text-blue-500 ml-[-10%] sm:ml-0 mb-10 sm:mb-0">
                  "Wee are Inspired by Results and driven by Data"
                </h1>
              </motion.div>
            </div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="block h-screen sm:justify-start justify-center text-center sm:text-start sm:ml-20 ml-0"
            >
              <p className="mt-16 text-lg font-semibold sm:hidden block mb-10">
                About Us:
              </p>
              <p className="flex  sm:hidden mt-4 mx-6">
                We are member of software development cell of Graphic Era Hill University, Haldwani . 
                Since we faced issues in searching for previous year question papers , syllabus and
                research papers so we decided to built a platform from all the essistail details will
                be in one platform thats how me come us with Level Up.
              </p>
            </motion.div>
          </div>
        </div>
        {/* teams section */}
        <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
        <div>
          <div className="container flex justify-center mx-auto pt-16">
            <div>
              <p className="text-gray-500 text-lg text-center font-normal pb-3">
                OUR TEAM
              </p>
              <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                The Talented People Behind the Scenes that make it all Work!
              </h1>
            </div>
          </div>
          <div className="w-full bg-gray-100 px-10 pt-10">
            <div className="container mx-auto">
              <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          
                          src="https://media.licdn.com/dms/image/D4D03AQEJExF4XhOLLg/profile-displayphoto-shrink_100_100/0/1675713118756?e=1700092800&v=beta&t=bqNFBMDx6Yzp_4pLhLu8RQRGEV6bncbxqcOytWpl3f8"
                          alt="#"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                       Priyanshu Negi 
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                      Frontend Developer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      Worked as the Frontend developer for this project.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="https://github.com/Priyanshu-752" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="https://www.linkedin.com/in/priyanshu-negi-87a56124a/" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="https://www.instagram.com/_priyansh_u123/" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                         src="https://scontent.cdninstagram.com/v/t51.2885-19/367519233_1013029186789832_6798094471169797453_n.jpg?stp=dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ozdParQo2XUAX8osxYm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfDZYxPuZsq4BbiZI17yMfgWhbHjAonfFLxcr0ch7vsl7g&oe=650662EA"
                          alt="#"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                      Mayank Bisth 
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                      Backend Developer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      Worked as the Backend developer for this project.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://scontent.cdninstagram.com/v/t51.2885-19/296913459_5288040954616587_5916360663963322905_n.jpg?stp=dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=GYRioHHC2-EAX95EV9Y&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfBpcSBOKmgmllTH96SW6Jw4asa4GdzevHaA2jR6lK5AmQ&oe=6506FCBA"
                          alt="#"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Gayatri Mehta
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Designer 
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Designed the website prototype.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* teams section end */}
        <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
        <div className="h-[40rem] sm:mt-20 mt-[20%] mb-20">
          <h1 className="flex justify-center font-extrabold text-center sm:text-4xl text-2xl">
            Where you can find us
          </h1>
          <div className="flex justify-center mt-20" id="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.355774734666!2d79.51697327521242!3d29.12469497539961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0854e46fbbcbb%3A0xe8ad2dca724e9699!2sGraphic%20Era%20Hill%20University%20Haldwani%20Campus!5e0!3m2!1sen!2sin!4v1686643619472!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-screen sm:mx-36 mx-10 h-[30rem]"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
