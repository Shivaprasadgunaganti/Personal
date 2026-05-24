import { motion } from "framer-motion";

const IntroScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="
        fixed
        inset-0
        z-[100]
        bg-slate-950
        flex
        items-center
        justify-center
      "
    >

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="
          text-slate-300
          text-xl
          sm:text-2xl
          tracking-wide
        "
      >
        Preparing something special ✨
      </motion.div>

    </motion.div>
  );
};

export default IntroScreen;