import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BlurText from '../../Components/BlurText/BlurText'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const divRef = useRef(null);
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const formRef = useRef(null);
    const socialRef = useRef(null);
    const socialLinksRef = useRef(null);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Main timeline for header
            const headerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });

            // Header animation - background text appears first
            headerTl.fromTo(headerRef.current.querySelector('.bg-text'), 
                {
                    scale: 0.8,
                    opacity: 0,
                    rotationY: 45
                },
                {
                    scale: 1,
                    opacity: 0.2,
                    rotationY: 0,
                    duration: 1.2,
                    ease: "power3.out"
                }
            )
            // Main heading slides in from bottom
            .fromTo(headerRef.current.querySelector('.main-heading'),
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                },
                "-=0.6"
            )
            // Subtitle fades in
            .fromTo(headerRef.current.querySelector('.subtitle'),
                {
                    y: 30,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out"
                },
                "-=0.4"
            );

            // Form container animation - slide in from right with rotation
            gsap.fromTo(formRef.current.parentElement,
                {
                    x: 150,
                    rotationY: 25,
                    opacity: 0,
                    transformPerspective: 1000
                },
                {
                    x: 0,
                    rotationY: 0,
                    opacity: 1,
                    transformPerspective: 1000,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Form header animation
            gsap.fromTo(formRef.current.querySelector('header'),
                {
                    scale: 0.8,
                    opacity: 0
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "back.out(1.5)",
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Form inputs with wave animation
            gsap.fromTo(formRef.current.querySelectorAll('input'),
                {
                    x: -30,
                    opacity: 0,
                    rotationX: 45
                },
                {
                    x: 0,
                    opacity: 1,
                    rotationX: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Textarea special animation
            gsap.fromTo(formRef.current.querySelector('textarea'),
                {
                    scale: 0.9,
                    opacity: 0,
                    rotation: 2
                },
                {
                    scale: 1,
                    opacity: 1,
                    rotation: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: 0.8,
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Button with special bounce effect
            gsap.fromTo(formRef.current.querySelector('button'),
                {
                    y: 30,
                    scale: 0.8,
                    opacity: 0
                },
                {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "back.out(2)",
                    delay: 1,
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Social section with separate ScrollTrigger for mobile responsiveness
            gsap.fromTo(socialRef.current.querySelector('.social-header'),
                {
                    y: 40,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: socialRef.current,
                        start: "top 90%", // More sensitive for mobile
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Social links with enhanced mobile-friendly ScrollTrigger
            gsap.fromTo(socialLinksRef.current.querySelectorAll('li'),
                {
                    scale: 0,
                    rotation: 360,
                    opacity: 0,
                    y: 50
                },
                {
                    scale: 1,
                    rotation: 0,
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(2)",
                    scrollTrigger: {
                        trigger: socialLinksRef.current,
                        start: "top 95%", // Very sensitive for mobile screens
                        toggleActions: "play none none reverse",
                        // Add refresh for mobile orientation changes
                        invalidateOnRefresh: true
                    }
                }
            );

            // Email section animation
            gsap.fromTo(socialRef.current.querySelector('.email-section'),
                {
                    y: 30,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: socialRef.current.querySelector('.email-section'),
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Enhanced hover animations for social links
            const socialLinks = socialLinksRef.current.querySelectorAll('li');
            socialLinks.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    gsap.to(link, {
                        scale: 1.25,
                        rotation: 10,
                        duration: 0.4,
                        ease: "back.out(1.5)"
                    });
                });
                
                link.addEventListener('mouseleave', () => {
                    gsap.to(link, {
                        scale: 1,
                        rotation: 0,
                        duration: 0.4,
                        ease: "back.out(1.5)"
                    });
                });

                // Touch animations for mobile
                link.addEventListener('touchstart', () => {
                    gsap.to(link, {
                        scale: 1.15,
                        duration: 0.2,
                        ease: "power2.out"
                    });
                });

                link.addEventListener('touchend', () => {
                    gsap.to(link, {
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);
    
    return (
        <>
          <section ref={sectionRef} id="contact" className='px-4 md:px-10 py-20'>
            <header ref={headerRef} className='relative text-center'>
              <BlurText
            aria-hidden="true"
            text="GET IN TOUCH"
            delay={200}
            animateBy="words"
            direction="top"
            className="absolute inset-0 -top-6 text-5xl md:text-8xl font-londrina font-medium text-gray-200 opacity-20 z-[-1] "
          />
          <BlurText
            text="Get in touch"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-6xl px-4 font-bold mb-5 "
          />
              <p className='subtitle gray-txt text-sm md:text-md text-center leading-relaxed'>Let's create something amazing together!</p>
            </header>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10'>
              {/* FORM */}
              <div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} className="relative w-full rounded-xl p-px backdrop-blur-md overflow-hidden shadow-lg">
                <div className={`pointer-events-none blur-xl rounded-full bg-gradient-to-r from-blue-400/30 via-purple-500/30 to-pink-400/30 w-32 h-32 absolute z-0 transition-all duration-700 ease-out ${visible ? 'opacity-70 scale-110' : 'opacity-0 scale-90'}`} style={{ top: position.y - 64, left: position.x - 64 }} />
                <form ref={formRef} className='relative flex flex-col w-full gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border border-white/30 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-purple-500/20 hover:border-white/40'>
                  <header className='flex items-center gap-3'>
                      <div className='w-0.5 h-7 bg-white'></div>
                      <h2 className='text-2xl font-bold text-white'>Say Hello 👋</h2>
                  </header>
                  <p className='gray-txt'>Feel free to reach out via the form below</p>
                  <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-3'>
                      <input type="text" placeholder='Your name' className='w-full p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300' required />
                      <input type="email" placeholder='Your email address' className='w-full p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300' required />
                  </div>
                  <textarea placeholder='what i can help you with?' className='w-full p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 min-h-[100px] resize-none' required></textarea>
                  <button type='submit' className='text-white dark:bg-gradient-to-r dark:from-[#6B3F69] dark:to-[#98A1BC] dark:hover:from-[#98A1BC] dark:hover:to-[#6B3F69] flex items-center gap-2 justify-center p-3 rounded-lg bg-gradient-to-r from-[#205781] to-[#98A1BC] hover:from-[#003092] hover:to-[#98A1BC] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-purple-500/25'><i className="fa-regular fa-paper-plane"></i> Send Message</button>
                <p className='gray-txt text-xs'>Available for freelance projects and collaborations</p>
                </form>
              </div>

              {/* SOCIALS + EMAIL */}
              <div ref={socialRef}>
                <div className='social-header'>
                  <header className='flex items-center gap-3 mb-2'>
                    <div className='w-0.5 h-7 bg-mainColor'></div>
                    <h2 className='text-xl md:text-2xl font-bold'>Let's connect</h2>
                  </header>
                  <p className='gray-txt ms-5'>You can also find me on</p>
                </div>
                <ul ref={socialLinksRef} className='flex gap-3 mt-5'>
                  <li className='w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-xl sm:text-2xl text-white mb-3 hover:bg-mainColor transition cursor-pointer'>
                    <a href="https://github.com/" target='blank'><i className="fa-brands fa-github"></i> </a>
                  </li>
                  <li className='w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-xl sm:text-2xl text-white mb-3 hover:bg-mainColor transition cursor-pointer'>
                    <a href="https://www.linkedin.com/in/anber-alaa-281626336/" target='blank'><i className="fa-brands fa-linkedin"></i></a>
                  </li>
                  <li className='w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-xl sm:text-2xl text-white mb-3 hover:bg-mainColor transition cursor-pointer'>
                    <a href="https://www.facebook.com/anber.alaa.7" target='blank'><i className="fa-brands fa-facebook"></i></a>
                  </li>
                  <li className='w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-xl sm:text-2xl text-white mb-3 hover:bg-mainColor transition cursor-pointer'>
                    <a href="https://x.com/_anberalaa_" target='blank'><i className="fa-brands fa-x-twitter"></i></a>
                  </li>
                  <li className='w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-xl sm:text-2xl text-white mb-3 hover:bg-mainColor transition cursor-pointer'>
                    <a href="https://www.instagram.com/_.anberalaa._art/" target='blank'><i className="fa-brands fa-instagram"></i> </a>
                  </li>
                </ul>
                <div className='email-section'>
                  <p className='gray-txt ms-5 mt-5'>Or reach me directly at:</p>
                  <div className='flex items-center gap-2 mt-2 ms-5'>
                    <span><i className="fa-regular fa-envelope"></i></span>
                    <a
                      href="https://mail.google.com/mail/?view=cm&to=anber.alaa27@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline"
                    >
                      anber.alaa27@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}