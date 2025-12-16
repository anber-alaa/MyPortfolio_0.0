"use client";;
import { IconArrowLeft, IconArrowRight, IconEye, IconBrandGithub } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

export const AnimatedProjects = ({
  projects,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div
      className="mx-auto max-w-md px-4 font-sans antialiased md:max-w-4xl md:px-6 lg:px-8">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : projects.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom">
                  <img
                    src={project.src}
                    alt={project.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-70 w-800 rounded-3xl object-cover object-center" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}>
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {projects[active].name}
            </h3>
            
            <div className="mt-3 flex items-center gap-4">
              {projects[active].link && (
                <a
                  href={projects[active].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 dark:text-neutral-400 hover:text-white dark:hover:text-white transition-colors duration-200"
                >
                  <IconEye className="h-4 w-4" />
                  <span>Demo</span>
                </a>
              )}
              
              {projects[active].github && (
                <a
                  href={projects[active].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 dark:text-neutral-400 hover:text-white dark:hover:text-white transition-colors duration-200"
                >
                  <IconBrandGithub className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
            
            <motion.p className="mt-8 text-lg text-white/70 dark:text-neutral-300">
              {projects[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block">
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            
            {projects[active].stack && projects[active].stack.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-6 flex flex-wrap gap-2"
              >
                {projects[active].stack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.3 + index * 0.05,
                    }}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-xl text-gray-800 dark:text-neutral-200 border border-white/30 dark:border-white/20 shadow-lg hover:shadow-xl hover:bg-white/30 dark:hover:bg-white/15 transition-all duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </motion.div>
          <div className="flex items-end justify-end gap-4 pt-12 md:pt-5">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
              <IconArrowLeft
                className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
              <IconArrowRight
                className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};