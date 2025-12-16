import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedProjects } from '../../Components/AnimatedProjescts/AnimatedProjects';
import Devfolio from '../../assets/images/Projects/Devfolio.png'
import Spylt from "../../assets/images/Projects/SpyltDrink.png"
import FlowerShop from "../../assets/images/Projects/FlowerShop.png"
import Daniels from '../../assets/images/Projects/Daniels.png'
import MemoryGame from '../../assets/images/Projects/MemoryGame.png'
import LoginSystem  from '../../assets/images/Projects/LoginSystem.png'
import Bookmarker  from '../../assets/images/Projects/Bookmarker.png'
import freshCart  from '../../assets/images/Projects/freshcart.png'
import weather  from '../../assets/images/Projects/weatherApp.png'
import Mealify  from '../../assets/images/Projects/Mealify.png'
import visage  from '../../assets/images/Projects/visage.png'
import Quote  from '../../assets/images/Projects/QuoteGenerator.png'
import yummy  from '../../assets/images/Projects/yummy.png'
import BlurText from '../../Components/BlurText/BlurText'

gsap.registerPlugin(ScrollTrigger);
const projects = [
    {
      quote:
        "A responsive e-commerce platform. it features user authentication, product catalog, real-time cart updates, integration with a payment gateway, order tracking, and offering a seamless shopping experience.",
      name: "FreshCart",
      src: freshCart,
      link:"https://fresh-cart-dpon.vercel.app/",
      github:"https://github.com/anber-alaa/fresh-Cart",
      stack: ["React","Tailwind CSS4","React-Query","Context"]
    },
    {
      quote:
        "Product landing page designed to showcase beverage products in an attractive using GSAP animations. focuses on capturing user attention through stunning visuals, smooth animations, and a seamless user experience across all devices.",
      name: "Spylt drink",
      src: Spylt,
      link:"https://spylt-drink-theta.vercel.app/",
      github:"https://github.com/anber-alaa/SPYLT-Drink",
      stack: ["React","Tailwind CSS4","GSAP"]
    },
    {
      quote:
        "A fully responsive single-page web application Consumes TheMealDB API. it features animated Side Navigation Menu, Search meals by name and first letter, Browse all meal categories, View meals by area/country, View meal details.",
      name: "Yummy",
      link:"https://anber-alaa.github.io/yummy/",
      github:"https://github.com/anber-alaa/yummy",
      src: yummy,
      stack: ["HTML", "CSS", "Bootstrap", "jQuery"]
    },
    {
      quote:
        "A dynamic and responsive weather forecasting web app that allows users to check real-time weather conditions and forecasts for any city or their current location. The app fetches live data from the WeatherAPI and presents it using a clean, card-based UI design.",
      name: "Weather App",
      link:"https://anber-alaa.github.io/weather-v2/",
      github:"https://github.com/anber-alaa/weather-v2",      
      src: weather,
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      quote:
        "A responsive website demonstrates how to use Bootstrap's grid system and components to build fast and responsive layouts.",
      name: "DevFolio",
      link:"https://dev-folio-pink-kappa.vercel.app/",
      github:"https://github.com/anber-alaa/DevFolio",
      src: Devfolio,
      stack: ["HTML", "CSS", "Bootstrap"]
    },
    {
      quote:
        "This project showcases a clean and modern design, with a strong focus on usability, mobile-first design, and adaptability across all screen sizes.",
      name: "Daniels",
      link:"https://daniels-demo.vercel.app/",
      github:"https://github.com/anber-alaa/Daniels-Landing-Page",
      src: Daniels,
      stack: ["HTML", "CSS", "Bootstrap"]
    },
    {
      quote:
        "Visage Beauty is a modern, fully responsive website designed for a beauty brand. It showcases elegant UI components, smooth animations, and a user-friendly layout.",
      name: "Visage Beauty",
      link:"https://anber-alaa.github.io/visage-Beauty/",
      github:"https://github.com/anber-alaa/visage-Beauty",
      src: visage,
      stack: ["HTML", "CSS", "JavaScript","GSAP"]
    },
    {
      quote:
        "A simple and intuitive web application that allows users to manage their favorite websites. You can add, view, and delete bookmarks with real-time input validation and persistent storage using localStorage.",
      name: "Bookmarker App",
      link:"https://bookmark-ten-murex.vercel.app/",
      github:"https://github.com/anber-alaa/Bookmark",
      src: Bookmarker,
      stack: ["HTML", "CSS", "JavaScript"]
    },
    {
      quote:
        "A responsive e-commerce website for a flower shop. It features a modern UI, smooth animations, add to cart, and a seamless shopping experience.",
      name: "Flower Shop",
      link:"https://flower-shop-khaki-nine.vercel.app/",
      github:"https://github.com/anber-alaa/FlowerShop",
      src: FlowerShop,
      stack: ["HTML", "CSS","Bootstrap", "JavaScript"]
    },
    {
      quote:
        "A simple quote generator built using HTML, CSS, and JavaScript. It displays a random quote from a predefined array every time you click the “New Quote” button. Great for practicing basic DOM manipulation and event handling.",
      name: "Quote Generator",
      link:"https://quotes-generator-rho-three.vercel.app/",
      github:"https://github.com/anber-alaa/Quotes-generator",
      src: Quote,
      stack: ["HTML", "CSS", "Bootstrap","JavaScript"]
    },
    {
      quote:
        "A basic front-end authentication system built using HTML, CSS, and JavaScript, with user credentials stored in the browser’s localStorage.Ideal for learning how authentication logic works on the front end without a backend server.",
      name: "Login System",
        link:"https://login-system0-0.vercel.app/",
      github:"https://github.com/anber-alaa/Login-system0.0",
      src: LoginSystem,
      stack: ["HTML", "CSS", "Bootstrap", "JavaScript"]
    },
    {
      quote:
      "An interactive Memory Card Game it features Shuffle cards randomly on each game start.Flip cards and match identical pairs. Sound effects for correct and wrong matches.",
      name: "Memory Game",
      link:"https://fresh-cart-dpon.vercel.app/",
      github:"https://github.com/anber-alaa/Memory-Game",
      src: MemoryGame,
      stack: ["HTML","CSS", "Bootstrap", "JavaScript",]
    },
    {
      quote:
        "Through this project, I practiced and improved : Structuring HTML for scalable and readable markup ,Applying Bootstrap’s grid & utilities effectively, Overriding Bootstrap with custom CSS for a branded look, Writing responsive CSS media queries, Creating a clean, user-friendly UI , using animation",
      name: "Mealify",
      link:"https://mealify-lac-ten.vercel.app/",
      github:"https://github.com/anber-alaa/Mealify",
      src: Mealify,
      stack: ["HTML", "CSS", "Bootstrap"]
    },
  ];

export default function MyWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    document.title = "Projects | Anber";

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelector('header'), {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      gsap.from(".project-card", {
        y: 60,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.3, 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        onComplete: () => {
          gsap.to(".project-card", { filter: "blur(0px)", duration: 0.3 });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="px-4 md:px-10 py-15">
      <header className="relative text-center">
        <BlurText
            aria-hidden="true"
            text="PROJECTS"
            delay={200}
            animateBy="words"
            direction="top"
            className="absolute inset-0 -top-6 text-5xl md:text-8xl font-londrina font-medium text-gray-200 opacity-20 z-[-1] "
          />
          <BlurText
            text="Projects"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-6xl px-4 font-bold mb-5 "
          />
      </header>

      <p className="gray-txt text-base md:text-lg text-center leading-relaxed max-w-3xl mx-auto mb-10">
        Explore my mini-projects showcasing my skills in web development and design.
      </p>
      <AnimatedProjects
      projects={projects}
      />
    </section>
  );
}
