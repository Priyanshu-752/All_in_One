import React, { useEffect, useRef } from "react";
import { MdVerified } from "react-icons/md";
import { useAnimation, useInView, motion } from "framer-motion";

const Review = () => {
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
    <div className="overflow-x-hidden max-w-screen font-poppins">
      <section className="">
        {Width < 631 ? (
          <>
            <div className="container px-6 py-12 mx-auto">
              <div className="grid items-center gap-4 xl:grid-cols-5">
                <div className="max-w-2xl mx-auto rounded shadow-md bg-blue-100/10 p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                  <h2 className="text-4xl font-bold text-black">
                    What our Users have to say
                  </h2>
                  <p className="text-black">
                  Here are some reviews of our students and their excperience
                    with our services and that wee provide!
                  </p>
                </div>
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md bg-blue-200/30">
                        <p>
                        I recently used the services of this website, and I am
                          thrilled with the results.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src="https://media.licdn.com/dms/image/D4D03AQG0Lc8nRPJ97w/profile-displayphoto-shrink_100_100/0/1693376363377?e=1700092800&v=beta&t=KGXA1RBnk2Y7rU5VEFBgIo6dMsqP52tcFIb1z2Od2nI"
                              alt=""
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-md font-semibold">Mayank Bisht</p>
                            <p className="text-sm text-gray-400">Gehu, Haldwani</p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md bg-blue-200/60">
                        <p>
                          I cannot say enough good things about this agency. The
                          level of workmanship they displayed was truly
                          impressive.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src="https://source.unsplash.com/50x50/?portrait?2"
                            alt=""
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-md font-semibold">
                              Soniya Khan
                            </p>
                            <p className="text-sm dark:text-gray-400">
                              Gehu, Bhimtal
                            </p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md bg-blue-200/60">
                        <p>
                        I have had the pleasure of working with this awebsite,
                          and I can confidently say that they are a reliable and
                          trustworthy partner. 
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src="https://media.licdn.com/dms/image/D4D03AQEJExF4XhOLLg/profile-displayphoto-shrink_100_100/0/1675713118756?e=1700092800&v=beta&t=bqNFBMDx6Yzp_4pLhLu8RQRGEV6bncbxqcOytWpl3f8"
                              alt=""
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-md font-semibold">
                              Priyanshu Negi
                            </p>
                            <p className="text-sm dark:text-gray-400">Gehu, Haldwani</p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md bg-blue-200/30">
                        <p>
                          I recently engaged this agency for their services, and
                          I am extremely pleased with the outcome. 
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src="https://source.unsplash.com/50x50/?portrait?4"
                            alt=""
                            className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                          />
                          <div>
                            <p className="text-md font-semibold">
                              Ajay Sharama
                            </p>
                            <p className="text-sm dark:text-gray-400">Gehu, Deemed</p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container px-6 py-12 mx-auto">
              <div className="grid items-center gap-4 xl:grid-cols-5">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="max-w-2xl mx-auto rounded shadow-md bg-blue-100/10 p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left"
                >
                  <h2 className="text-4xl font-bold text-black">
                    What our users have to say
                  </h2>
                  <p className="text-black">
                    Here are some reviews of our students and their excperience
                    with our services and that wee provide!
                  </p>
                </motion.div>
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid content-center gap-4">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: -75, y: -45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="p-6 rounded shadow-md bg-blue-200/30"
                      >
                        <p>
                          I recently used the services of this website, and I am
                          thrilled with the results. 
                        </p>
                        <div className="flex justify-between items-center mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src="https://media.licdn.com/dms/image/D4D03AQG0Lc8nRPJ97w/profile-displayphoto-shrink_100_100/0/1693376363377?e=1700092800&v=beta&t=KGXA1RBnk2Y7rU5VEFBgIo6dMsqP52tcFIb1z2Od2nI"
                              alt=""
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">
                                Mayank Sharama
                              </p>
                              <p className="text-sm text-gray-400 block">
                                Gehu, Haldwani
                              </p>
                            </div>
                          </div>

                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: -75, y: 45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="p-6 rounded shadow-md bg-blue-200/60"
                      >
                        <p>
                          I cannot say enough good things about this website. The
                          level of workmanship they displayed was truly
                          impressive. 
                        </p>
                        <div className="flex items-center justify-between mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src="https://source.unsplash.com/50x50/?portrait?1"
                              alt=""
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col sm:ml-2 ">
                              <p className="text-lg font-semibold block">
                                Soniya Khan
                              </p>
                              <p className="text-sm text-gray-400 block">
                                Gehu, Deemed
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="grid content-center gap-4">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: 75, y: -45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.7, delay: 0.55 }}
                        className="p-6 rounded shadow-md bg-blue-200/60"
                      >
                        <p>
                          I have had the pleasure of working with this awebsite,
                          and I can confidently say that they are a reliable and
                          trustworthy partner. 
                        </p>
                        <div className="flex justify-between items-center mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src="https://media.licdn.com/dms/image/D4D03AQEJExF4XhOLLg/profile-displayphoto-shrink_100_100/0/1675713118756?e=1700092800&v=beta&t=bqNFBMDx6Yzp_4pLhLu8RQRGEV6bncbxqcOytWpl3f8"
                              alt=""
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">
                                Priyanshu Negi
                              </p>
                              <p className="text-sm text-gray-400 block">
                                Gehu, Haldwani
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: 75, y: 45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.8, delay: 0.75 }}
                        className="p-6 rounded shadow-md bg-blue-200/30"
                      >
                        <p>
                          I recently engaged this website for their services, and
                          I am extremely pleased with the outcome. Their
                          attention to detail is second to none. 
                        </p>
                        <div className="flex justify-between items-center mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src="https://scontent.fdel25-2.fna.fbcdn.net/v/t1.15752-9/334975397_869201040812989_4511464588052660106_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=4de414&_nc_ohc=QwZtDNBSrg0AX-PUEe5&_nc_ht=scontent.fdel25-2.fna&oh=03_AdSOoVsQ_4iiMYx8O0wc50bjTsUplSKCMOobMmEkMz7nWQ&oe=6529558B"
                              alt=""
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">
                                Ajay Sharama
                              </p>
                              <p className="text-sm text-gray-400 block">
                                Gehu, Bhimtal
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
      <div className="w-[70%]  h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
    </div>
  );
};

export default Review;
