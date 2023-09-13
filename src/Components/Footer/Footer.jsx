import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from 'framer-motion';
import {FaFacebookSquare, FaInstagram, FaTwitterSquare, FaDribbbleSquare, FaGithubSquare} from 'react-icons/fa'
import { Link } from 'react-router-dom'
  
const Footer = () => {
  const {innerWidth: Width} = window;
  const ref = useRef();
  const isInView = useInView(ref)
  const mainControlls = useAnimation(isInView);
  //use effect when page loads
  useEffect(()=> {
      if(isInView) {
          mainControlls.start("visible")
      }
  }, [isInView])
  return (
    <div className="overflow-x-hidden max-w-screen font-poppins">
      {/* footer top section */}
      <div className="sm:flex justify-between py-10 px-8 grid bg-gray-900">
        <div className="text-white">
          <h1 className="w-full text-3xl font-bold cursor-pointer text-blue-400">
            LevelUp
          </h1>
          <p className="py-4">
            Welcome to LevelUp , where we transform raw information
            into actionable insights. With cutting-edge technology and a team of
            skilled analysts, we specialize in deciphering complex data sets to
            uncover valuable patterns and provide you the latest materials for your studies.
          </p>
          <div className="flex md:w-[75%] justify-between my-6 text-blue-200">
            {/* social media icons */}
            <FaFacebookSquare size={30} className="cursor-pointer " />
            <FaDribbbleSquare size={30} className="cursor-pointer " />
            <FaInstagram size={30} className="cursor-pointer " />
            <FaGithubSquare size={30} className="cursor-pointer " />
            <FaTwitterSquare size={30} className="cursor-pointer " />
          </div>
        </div>
        <div className="text-white sm:w-[900px] sm:ml-[18%] sm:mr-[12%] sm:pt-0">
          <div>
            <h1 className="sm:w-[30rem] md:text-4xl sm:text-3xl text-center text-2xl font-bold py-2">
              Want to give some suggestions ?
            </h1>
            <p className=" text-center pb-4">
              Contact us throught email or whatsapp
            </p>
          </div>
          <div class="w-full px-4 lg:w-2/2">
                  <div class="flex sm:flex-wrap sm:justify-end">
                    <motion.div
                      ref={ref}
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 75 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {" "}
                      <button
                        href="#"
                        class="hover:bg-blue-500 my-1 mr-4 inline-block rounded bg-white bg-opacity-[15%] py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-100 md:px-9 lg:px-6 xl:px-9"
                      >
                        Let's Talk
                      </button>
                    </motion.div>
                    <motion.div
                      ref={ref}
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 75 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      {" "}
                      <Link to="services">

                      <button
                        class="my-1 inline-block rounded bg-[#41a5d7] py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
                      >
                        Contact Us
                      </button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
        </div>
      </div>
      {/* footer top section end */}
      <div className="sm:mx-auto pt-0 pb-8 sm:grid flex-row lg:grid-cols-3 w-screen gap-8 text-gray-300 bg-gray-800 ">

        <div className="h-[1px] bg-gray-100/20 w-[100rem] ml-[-20rem]"></div>
        <p className='pt-4 text-gray-200/40 text-sm flex justify-center text-center'>All Rights Reserved 2023 - LevelUp </p>
      </div>
      {/* footer bottom section with links */}
      <div></div>
      {/* footer bottom section with links end */}
    </div>
  );
}

export default Footer