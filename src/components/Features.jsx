import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animation";

import gsap from "gsap";
import { dots } from "../assets";
import AnimatedCounter from "./AnimatedCounter";

const Features = () => {
  useGSAP(() => {
    animateWithGsap(
      ".g_box",
      // { rotation: 360, x: 1, duration: 1,  }
      { y: 0, scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
    animateWithGsap(".g_box", {
      y: 0,
      opacity: 1,
      ease: "bounce.out",
      duration: 1,
    });
    animateWithGsap(".g_line", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <>
      <section className='h-full  bg-zinc relative overflow-hidden '>
        <div className=' g_line w-1  h-80 bg-gradient-to-b from-zinc-500 mt-5 absolute right-0  rounded-full translate-y-28' />

        <div className='screen-max-wdith '>
          <div className='mb-12 w-full'>
            <h1
              id='features_title'
              className='text-zinc-500 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20'
            >
              Explore the full story.
            </h1>
          </div>
          <div className='feature-text-container'>
            <div className='flex-1 '>
              <p className='feature-text g_text'>
                <p className='text-white my-4'>
                  Own Your Vision, Command the Process
                </p>
                From day one, you’re not just involved—you’re in charge. Your
                ideas are your greatest asset, and we provide the secure
                environment and expert team to bring them to life without
                compromise. You lead, we execute.
              </p>
              <p className='feature-text g_text'>
                <p className='text-white my-4'>
                  Real-Time Updates, Full Transparency
                </p>
                Experience the thrill of running your own project with daily
                updates and transparent communication. Our team is at your
                disposal for advice and collaboration, ensuring that your vision
                is realized exactly as you envision it.
              </p>
              <p className='feature-text g_text'>
                <p className='text-white my-4'>Lead Like a CEO</p>
                Step into the role of a CEO—visit our team, drive the
                development process, and watch your product take shape under
                your leadership. This isn’t just a service; it’s a partnership
                where your decisions define the outcome.
              </p>
              <p className='feature-text g_text'>
                <p className='text-white my-4'>
                  Why Choose Blueto? Expertise:{" "}
                </p>
                Our team comprises skilled professionals with in-depth knowledge
                of the latest technologies. Custom Solutions: We understand that
                every business is unique. Our solutions are tailor-made to fit
                your specific requirements. Quality Assurance: Our commitment to
                delivering high-quality software ensures that your project meets
                the highest standards.{" "}
                <span className='text-white '>
                  ALL THE PROJECTS WILL BE KEPT AS SECRETS.
                </span>{" "}
              </p>
              {/* <div className=' md:flex flex-row items-center justify-around hidden mt-20'>
                <div className='g_box   hidden md:flex w-36 h-40 md:w-64 md:h-64 border-2  items-center justify-center rounded-2xl '>
                  <p className='text-center p-4 text-zinc-400 '>
                    <p className='italic text-slate-300 text-lg '>
                      Your Vision, Your Secret Your ideas
                    </p>{" "}
                    remain strictly confidential with us. We guarantee that your
                    intellectual property stays protected, so you can innovate
                    with peace of mind
                  </p>
                </div>
                <div className='g_box  hidden md:flex w-36 h-40 md:w-64 md:h-64 border-2  items-center justify-center rounded-2xl'>
                  <p className='text-center p-4 text-zinc-400 '>
                    <p className='italic text-slate-300 text-lg '>
                      Your Vision, Your Secret Your ideas
                    </p>{" "}
                    remain strictly confidential with us. We guarantee that your
                    intellectual property stays protected, so you can innovate
                    with peace of mind
                  </p>
                </div>
              </div> */}

              {/* <div className='absolute   md:-bottom-[19rem] md:-right-[35rem]'>
              <img src={dots} alt='addon' />
            </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* yyyyyyy */}

      <div
        class='space-y-8 relative overflow-hidden mt-[5rem]  flex flex-col items-center justify-center h-screen
      border border-blue-300 p-5 rounded-md shadow-custom-red'
      >
        <div className='absolute inset-0 flex justify-center mr-[9rem]'>
          <div className=' w-0.5 bg-gradient-to-b from-transparent via-red-300 to-green animate-lineGrow'></div>
        </div>
        {/* <div class='absolute inset-0 ml-5 translate-x-0.5 md:ml-[8.75rem] md:translate-x-0 h-[90vh] w-0.5 bg-gradient-to-b from-transparent via-red-300 to-green animate-lineGrow'></div> */}
        <div class='reusecard relative opacity-0 animate-fadeInLeft animation-delay-100'>
          <div class='md:flex items-center md:space-x-4 mb-3'>
            <div class='flex items-center space-x-4 md:space-x-2 md:space-x-reverse'>
              <div class='flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1 ml-[7.6rem]'>
                <svg
                  class='fill-emerald-500'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                >
                  <path d='M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z' />
                </svg>
              </div>
            </div>
            <div class='text-slate-500 ml-14'>
              <div class='flex flex-col gap-4'>
                <div class='flex flex-col items-center justify-center text-center h-[100px] w-[250px] rounded-lg text-white cursor-pointer transition-transform duration-400 transform hover:scale-110 bg-blue-500'>
                  <p class='text-base font-bold'>Connect with Us</p>
                  <p class='text-xs'>Welcome aboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class='relative opacity-0 animate-fadeInLeft animation-delay-300'></div>
        <div class='relative opacity-0 animate-fadeInLeft animation-delay-500'></div> */}
        {/* jb */}

        {/* <div class='absolute inset-0 ml-5 translate-x-0.5 md:ml-[8.75rem] md:translate-x-0 h-full w-0.5 bg-gradient-to-b from-transparent via-slate-300 to-transparent animate-lineGrow'></div> */}
        <div class='reusecard relative opacity-0 animate-fadeInLeft animation-delay-200'>
          <div class='md:flex items-center md:space-x-4 mb-3'>
            <div class='flex items-center space-x-4 md:space-x-2 md:space-x-reverse'>
              <div class='flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1 ml-[7.6rem]'>
                <svg
                  class='fill-emerald-500'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                >
                  <path d='M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z' />
                </svg>
              </div>
            </div>
            <div class='text-slate-500 ml-14'>
              <div class='flex flex-col gap-4'>
                <div class='flex flex-col items-center justify-center text-center h-[100px] w-[250px] rounded-lg text-white cursor-pointer transition-transform duration-400 transform hover:scale-110 bg-red-500'>
                  <p class='text-base font-bold'>BrainStorm Your Idea</p>
                  <p class='text-xs'>Lets do a research</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class='absolute inset-0 ml-5 translate-x-0.5 md:ml-[8.75rem] md:translate-x-0 h-full w-0.5 bg-gradient-to-b from-transparent via-slate-300 to-transparent animate-lineGrow'></div> */}
        <div class='reusecard relative opacity-0 animate-fadeInLeft animation-delay-300'>
          <div class='md:flex items-center md:space-x-4 mb-3'>
            <div class='flex items-center space-x-4 md:space-x-2 md:space-x-reverse'>
              <div class='flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1 ml-[7.6rem]'>
                <svg
                  class='fill-emerald-500'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                >
                  <path d='M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z' />
                </svg>
              </div>
            </div>
            <div class='text-slate-500 ml-14'>
              <div class='flex flex-col gap-4'>
                <div class='flex flex-col items-center justify-center text-center h-[100px] w-[250px] rounded-lg text-white cursor-pointer transition-transform duration-400 transform hover:scale-110 bg-yellow-500'>
                  <p class='text-base font-bold'>Get Your team</p>
                  <p class='text-xs'>Welcome CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class='absolute inset-0 ml-5 translate-x-0.5 md:ml-[8.75rem] md:translate-x-0 h-full w-0.5 bg-gradient-to-b from-transparent via-slate-300 to-transparent animate-lineGrow'></div> */}
        <div class='reusecard relative opacity-0 animate-fadeInLeft animation-delay-400'>
          <div class='md:flex items-center md:space-x-4 mb-3'>
            <div class='flex items-center space-x-4 md:space-x-2 md:space-x-reverse'>
              <div class='flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1 ml-[7.6rem]'>
                <svg
                  class='fill-emerald-500'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                >
                  <path d='M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z' />
                </svg>
              </div>
            </div>
            <div class='text-slate-500 ml-14'>
              <div class='flex flex-col gap-4'>
                <div class='flex flex-col items-center justify-center text-center h-[100px] w-[250px] rounded-lg text-white cursor-pointer transition-transform duration-400 transform hover:scale-110 bg-green-500'>
                  <p class='text-base font-bold'>Create Product</p>
                  <p class='text-xs'>Great!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class='relative opacity-0 animate-fadeInLeft animation-delay-900'></div> */}
        {/* <div class='relative opacity-0 animate-fadeInLeft animation-delay-500'></div> */}
      </div>

      {/* countr */}
      <AnimatedCounter />
    </>
  );
};

export default Features;
