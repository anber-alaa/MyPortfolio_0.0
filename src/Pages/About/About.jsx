import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Anber from "../../assets/images/Anber.jpg";
import TechStack from "../../Components/TechStack/TechStack";
import DownloadBtn from "../../Components/DownloadBtn/DownloadBtn";
import BlurText from "../../Components/BlurText/BlurText";
import TextType from "../../Components/TextType/TextType";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphsRef = useRef([]);

  useEffect(() => {
    document.title = "AboutMe | Anber";
   }, []);

  return (
    <section ref={sectionRef} id="about" className="px-4 md:px-10 py-20">
      <div className="container">

        <header className="relative text-center">
          <BlurText
            aria-hidden="true"
            text="ABOUT ME"
            delay={200}
            animateBy="words"
            direction="top"
            className="absolute inset-0 -top-6 text-5xl md:text-8xl font-londrina font-medium text-gray-200 opacity-20 z-[-1] "
          />
          <BlurText
            text="About Me"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-6xl px-4 font-bold mb-5 "
          />
        </header>

        <div className="mt-10 flex flex-col md:flex-row justify-between gap-10">
          {/* Image & Download Button */}
          <div
            ref={imageRef}
            className="flex flex-col gap-5 items-center w-full md:w-1/4"
          >
            <img
              src={Anber}
              className="w-full max-w-[250px] rounded-full border-4 border-solid border-white dark:border-secondaryColor"
              alt="Portrait of Anber, front-end developer"
              loading="lazy"
            />
            <div>
              <DownloadBtn />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-5 w-full md:w-3/4 text-center md:text-left">
            {[
              <>
                <TextType 
                  text={["Hey ! I’m Anber "]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="_"
                />
              </>,
              <>
              <div className="md:flex gap-20">
                <div className="w-full md:w-1/2">
                  <p className="text-base md:text-2xl leading-relaxed">
                  I'm a front-end developer passionate about creating user-friendly,
                  responsive web interfaces,{" "}
                  <span className="gradient-headings">
                    combining the art of aesthetics with the power of code.
                  </span>
                </p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-base md:text-2xl leading-relaxed">
                  I've built multiple web projects using HTML, CSS, JavaScript,
                  React.js, and Next.js with a strong eye for design and smooth user
                  experiences.
                  </p>
                </div>
              </div>
                
              </>,
              <>
              
                <p className="text-base md:text-xl leading-relaxed">
                  Currently, I'm seeking opportunities to apply my skills, grow within
                  a dynamic team, and contribute to impactful products. Beyond coding,
                  I enjoy drawing and exploring creative ideas.
                </p>
              </>
            ].map((el, index) => (
              <div
                key={index}
                ref={(elRef) => (paragraphsRef.current[index] = elRef)}
              >
                {el}
              </div>
            ))}

            <div className="max-w-[90%] md:max-w-4xl mx-auto">
              <TechStack />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
