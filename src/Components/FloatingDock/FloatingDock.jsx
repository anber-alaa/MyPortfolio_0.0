import { cn } from "../../lib/utils";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedMenuIcon from "../AnimatedMenuIcon/AnimatedMenuIcon";

export const FloatingDock = ({
  items = [],            
  desktopClassName,
  mobileClassName,
  dark,                  
  toggleTheme,           
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile
        items={items}
        className={mobileClassName}
        dark={dark}
        toggleTheme={toggleTheme}
      />
    </>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "fixed top-4 right-4 z-50 md:hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-1 shadow-lg",
          className
        )}
      >
        <AnimatedMenuIcon isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Dock  */}
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 md:hidden"
            >

              <div className="flex items-end gap-4 text-black rounded-3xl bg-white/10 dark:text-white dark:bg-white/5 backdrop-blur-2xl px-6 py-4 shadow-2xl border border-white/20 dark:border-white/10">
                
                {items.map((item) => (
                  <MobileIconContainer
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

function MobileIconContainer({ title, icon, href, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <NavLink to={href} onClick={onClick}>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}   
        onTouchEnd={() => setHovered(false)}
        className="relative flex flex-col items-center"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -top-9 mb-2 px-3 py-1.5 bg-white/20 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-xl text-xs whitespace-nowrap shadow-lg"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex aspect-square size-12 items-center justify-center rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-xl shadow-lg border border-white/40 dark:border-white/20">
          <div className="size-6 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* <div className="mt-1 size-1 rounded-full bg-gray-400 dark:bg-neutral-600" /> */}
      </motion.div>
    </NavLink>
  );
};




// Desktop Dock
const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 w-max items-end gap-4 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl px-8 pb-3 shadow-2xl border border-white/20 dark:border-white/10",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let widthIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let width = useSpring(widthTransform, { stiffness: 150, damping: 12 });
  let height = useSpring(heightTransform, { stiffness: 150, damping: 12 });
  let widthI = useSpring(widthIcon, { stiffness: 150, damping: 12 });
  let heightI = useSpring(heightIcon, { stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <NavLink to={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-xl flex items-center justify-center relative shadow-lg border border-white/40 dark:border-white/20"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/20 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-xl text-xs whitespace-nowrap shadow-lg"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div style={{ width: widthI, height: heightI }} className="flex items-center justify-center">
          {icon}
        </motion.div>
      </motion.div>
    </NavLink>
  );
}