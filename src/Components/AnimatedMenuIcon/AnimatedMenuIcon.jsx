import { motion } from "framer-motion";

export default function AnimatedMenuIcon({ isOpen, toggle }) {
  return (
    <motion.button
      onClick={toggle}
      className="w-10 h-10 flex flex-col justify-center items-center gap-1"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.span
        className="block w-6 h-0.5 bg-white/40 rounded"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 8 }
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block w-6 h-0.5 bg-white/40 rounded"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block w-6 h-0.5 bg-white/40 rounded"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -8 }
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
