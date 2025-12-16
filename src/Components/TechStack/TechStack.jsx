import React from 'react'
import html from '../../assets/images/techStack/imgi_2_html.webp'
import CSS from '../../assets/images/techStack/imgi_3_css.webp'
import bootstrap from '../../assets/images/techStack/bootstrap-icon-css.png'
import javaScript from '../../assets/images/techStack/javascript-logo-javascript-icon-transparent-free-png.webp'
import framerMotion from '../../assets/images/techStack/imgi_9_framer-motion.webp'
import Next from '../../assets/images/techStack/imgi_8_nextjs.webp'
import Tailwindcss from '../../assets/images/techStack/imgi_5_tailwind.webp'
import TypeScript from '../../assets/images/techStack/imgi_6_typescript.webp'
import react from '../../assets/images/techStack/imgi_7_react.webp'
import sass from '../../assets/images/techStack/imgi_4_sass.webp'
import github from '../../assets/images/techStack/imgi_22_github.webp'
import postman from '../../assets/images/techStack/imgi_24_postman.webp'
import npm from '../../assets/images/techStack/imgi_23_npm.webp'


import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export default function TechStack() {
const techRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-item", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 85%",
        },
      });
    }, techRef);

    return () => ctx.revert();
  }, []);
  
    return (
    <>
    <section ref={techRef}>
        <h5 className='text-lg sm:text-xl font-bold'>Tools & Technologies I use</h5>
        <div className='flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 justify-between my-4 sm:my-6 md:my-8'>
            {/* frontend */}
            <div className='w-full md:w-1/2'>
                <header className='flex items-center gap-3 mb-6'>
                    <div className='w-0.5 h-7 bg-mainColor'></div>
                    <h4 className='font-semibold text-base sm:text-lg'>Front-end</h4>
                </header>
                
                <div className='flex gap-3 flex-wrap text-black'>
                    <div className="flex tech-item items-center justify-center relative before:hidden hover:before:flex before:justify-center before:items-center before:h-7 before:text-[.9rem] before:px-3 before:content-['HTML'] before:bg-black/50 dark:before:bg-white/70 before:text-white dark:before:text-black before:absolute before:-top-7 before:rounded-lg cursor-pointer bg-white/10 rounded-2xl size-12">
                        <img src={html} className='w-8' alt="html icon" />
                    </div>
                    <div className="flex tech-item items-center justify-center relative before:hidden hover:before:flex before:justify-center before:items-center before:h-7 before:text-[.9rem] before:px-3 before:content-['CSS'] before:bg-black/50 dark:before:bg-white/70 before:text-white dark:before:text-black before:absolute before:-top-7 before:rounded-lg cursor-pointer bg-white/10 rounded-2xl size-12">
                        <img src={CSS} className='w-8' alt="html icon" />
                    </div>
                    <div className="flex tech-item items-center justify-center relative before:hidden hover:before:flex before:justify-center before:items-center before:h-7 before:text-[.9rem] before:px-3 before:content-['Bootstrap'] before:bg-black/50 dark:before:bg-white/70 before:text-white dark:before:text-black before:absolute before:-top-7 before:rounded-lg cursor-pointer bg-white/10 rounded-2xl size-12">
                        <img src={bootstrap} className='w-8' alt="Bootstrap icon" />
                    </div>
                    <div className="flex tech-item items-center justify-center relative before:hidden hover:before:flex before:justify-center before:items-center before:h-7 before:text-[.9rem] before:px-3 before:content-['JavaScript'] before:bg-black/50 dark:before:bg-white/70 before:text-white dark:before:text-black before:absolute before:-top-7 before:rounded-lg cursor-pointer bg-white/10 rounded-2xl size-12">
                        <img src={javaScript} className='w-8' alt="JavaScript icon" />
                    </div>
                    <div className="flex tech-item items-center justify-center relative before:hidden hover:before:flex before:justify-center before:items-center before:h-7 before:text-[.9rem] before:px-3 before:content-['React'] before:bg-black/50 dark:before:bg-white/70 before:text-white dark:before:text-black before:absolute before:-top-7 before:rounded-lg cursor-pointer bg-white/10 rounded-2xl size-12">
                        <img src={react} className='w-8' alt="React icon" />
                    </div>
                    <div className="flex tech-item items-center justify-center relative before:hidden hover:before:flex before:justify-center before:items-center before:h-7 before:text-[.9rem] before:px-3 before:content-['TailwindCSS'] before:bg-black/50 dark:before:bg-white/70 before:text-white dark:before:text-black before:absolute before:-top-7 before:rounded-lg cursor-pointer bg-white/10 rounded-2xl size-12">
                        <img src={Tailwindcss} className='w-8' alt="TailwindCSS icon" />
                    </div>
                    <div className="flex tech-item items-center justify-center relative before:hidden hover:before:flex before:justify-center before:items-center before:h-7 before:text-[.9rem] before:px-3 before:content-['TypeScript'] before:bg-black/50 dark:before:bg-white/70 before:text-white dark:before:text-black before:absolute before:-top-7 before:rounded-lg cursor-pointer bg-white/10 rounded-2xl size-12">
                        <img src={TypeScript} className='w-8' alt="TypeScript icon" />
                    </div>
                    <div className="flex tech-item items-center justify-center relative before:hidden hover:before:flex before:justify-center before:items-center before:h-7 before:text-[.9rem] before:px-3 before:content-['Sass'] before:bg-black/50 dark:before:bg-white/70 before:text-white dark:before:text-black before:absolute before:-top-7 before:rounded-lg cursor-pointer bg-white/10 rounded-2xl size-12">
                        <img src={sass} className='w-8' alt="sass icon" />
                    </div>
                    <div className="flex tech-item items-center justify-center relative before:hidden hover:before:flex before:justify-center before:items-center before:h-7 before:text-[.9rem] before:px-3 before:content-['Next'] before:bg-black/50 dark:before:bg-white/70 before:text-white dark:before:text-black before:absolute before:-top-7 before:rounded-lg cursor-pointer bg-white/10 rounded-2xl size-12">
                        <img src={Next} className='w-8' alt="Next icon" />
                    </div>
                    <div className="flex tech-item items-center justify-center relative before:hidden hover:before:flex before:justify-center before:items-center before:h-7 before:text-[.9rem] before:px-3 before:content-['FramerMotion'] before:bg-black/50 dark:before:bg-white/70 before:text-white dark:before:text-black before:absolute before:-top-7 before:rounded-lg cursor-pointer bg-white/10 rounded-2xl size-12">
                        <img src={framerMotion} className='w-8' alt="Framer Motion icon" />
                    </div>
                </div>
            </div>
            {/* tools & utilities */}
            <div className='w-full md:w-1/2'>
                <header className='flex items-center gap-3'>
                    <div className='w-0.5 h-7 bg-mainColor'></div>
                    <h4 className='font-semibold text-base sm:text-lg my-4'>Tools</h4>
                </header>
                <div className='flex gap-3 flex-wrap text-black'>
                    <div className="flex tech-item items-center justify-center relative before:hidden hover:before:flex before:justify-center before:items-center before:h-7 before:text-[.9rem] before:px-3 before:content-['GitHub'] before:bg-black/50 dark:before:bg-white/70 before:text-white dark:before:text-black before:absolute before:-top-7 before:rounded-lg cursor-pointer bg-white/10 rounded-2xl size-10 md:size-12">
                        <img src={github} className='w-6 md:w-8' alt="html icon" />
                    </div>
                    <div className="flex tech-item items-center justify-center relative before:hidden hover:before:flex before:justify-center before:items-center before:h-7 before:text-[.9rem] before:px-3 before:content-['Npm'] before:bg-black/50 dark:before:bg-white/70 before:text-white dark:before:text-black before:absolute before:-top-7 before:rounded-lg cursor-pointer bg-white/10 rounded-2xl size-10 md:size-12">
                        <img src={npm} className='w-6 md:w-8' alt="html icon" />
                    </div>
                    <div className="flex tech-item items-center justify-center relative before:hidden hover:before:flex before:justify-center before:items-center before:h-7 before:text-[.9rem] before:px-3 before:content-['Postman'] before:bg-black/50 dark:before:bg-white/70 before:text-white dark:before:text-black before:absolute before:-top-7 before:rounded-lg cursor-pointer bg-white/10 rounded-2xl size-10 md:size-12">
                        <img src={postman} className='w-6 md:w-8' alt="html icon" />
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}
