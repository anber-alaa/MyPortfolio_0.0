import { NavLink } from 'react-router-dom'
import profile from '../../assets/images/catProfile.webp'
import {useRef } from 'react'



export default function Hero() {
    const heroRef = useRef(null)
    
    return (
    <>
    <section ref={heroRef} className='min-h-full pt-30 md:pt-10 px-10 md:mb-20'>
        <div className='flex flex-col justify-center items-center gap-5 mb-10'>
            <div className='profile-img rounded-full hover:shadow-2xl hover:shadow-mainColor glow-circle'>
                <img src={profile} className='rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40' alt="cat" />
            </div>
            <div className='text-center'>
                <h1 className='hero-text text-xl sm:text-2xl mb-3'>
                    Hi, i'm <span className='font-caveat text-2xl sm:text-3xl font-semibold'>Anber Alaa 👋</span>
                </h1>                
            <span className='hero-text text-2xl md:text-5xl font-bold gradient-text'> Front-End developer</span>
            <h3
            className='hero-text text-2xl md:text-5xl font-bold mt-3'>
                
                who loves building things <br /> for the <span className='gradient-text relative inline-block'>
                    web.
                    <svg
                        className="-z-20 absolute -bottom-2 2xl:-bottom-4 xl:-bottom-4 lg:-bottom-4 md:-bottom-4 sm:-bottom-2.5 left-0 sm:left-1 2xl:w-[11.5rem] md:w-[5.7rem] sm:w-[4.5rem] w-[4rem] opacity-40"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -6 200 60"
                        aria-hidden="true"
                        role="img"
                        aria-label="Decorative Z underline"
                    >
                        <defs>
                        <linearGradient id="stroke-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F5CBCB" />    
                            <stop offset="100%" stopColor="#F5CBCB" />     
                        </linearGradient>
                        </defs>

                        <path
                        d="M 21 11 C 83 -2 139 3 178 13 C 111 5 60 6 18 18 C 15 19 15 22 19 21 C 78 11 107 10 189 19"
                        fill="none"
                        stroke="url(#stroke-gradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="1"
                        />
                    </svg>
                </span> 
            </h3>

            <div className='hero-links flex justify-center flex-wrap mt-10 gap-7 '>
                <NavLink
                    to={'/about'}
                    tabIndex="0"
                    className="h-full bg-inherit focus:outline-none font-caveat text-2xl md:text-3xl relative group w-fit cursor-pointer">
                    More about me
                    <span className="w-full scale-x-[30%] origin-left transition h-[2px] absolute bottom-0 left-0 group-hover:scale-x-100 dark:bg-white/30 bg-[#F5CBCB]/40">
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-user-round absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 opacity-0 scale-50 transition group-hover:scale-100 dark:group-hover:opacity-10 group-hover:opacity-30 group-hover:-translate-x-0 group-hover:-translate-y-3/4 group-hover:rotate-12">
                        <path d="M18 21a6 6 0 0 0-12 0"></path><circle cx="12" cy="11" r="4"></circle><rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    </svg>
                </NavLink>
                <NavLink to={'/myWorks'} tabIndex="0" className="h-full bg-inherit focus:outline-none font-caveat text-2xl md:text-3xl relative group  w-fit cursor-pointer">
                    What I've built
                    <span className="w-full scale-x-[30%] origin-left transition h-[2px] absolute bottom-0 left-0 group-hover:scale-x-100 dark:bg-white/30 bg-[#F5CBCB]/40"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-ruler absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 opacity-0 scale-50 transition group-hover:scale-100 dark:group-hover:opacity-10 group-hover:opacity-30 group-hover:-translate-x-0 group-hover:-translate-y-3/4 group-hover:rotate-12">
                    <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13">
                        </path><path d="m8 6 2-2"></path><path d="m18 16 2-2"></path><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path>
                        </svg>
                </NavLink>
                <NavLink to={'/contact'} tabIndex="0" className="h-full bg-inherit focus:outline-none font-caveat text-2xl md:text-3xl relative group w-fit cursor-pointer">
                    Get in touch 
                    <span className="w-full scale-x-[30%] origin-left transition h-[2px] absolute bottom-0 left-0 group-hover:scale-x-100 dark:bg-white/30 bg-[#F5CBCB]/40"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 opacity-0 scale-50 transition group-hover:scale-100 dark:group-hover:opacity-10 group-hover:opacity-30 group-hover:-translate-x-0 group-hover:-translate-y-3/4 group-hover:rotate-12">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                </NavLink>
            </div>
            </div>
        </div>
    </section>
    </>
    )
}
