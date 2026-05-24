import { motion } from "framer-motion";
import { mainMessage } from "../data/messages";

const BirthdayMessage = () => {
  return (
    <div className="bg-slate-950 px-6 py-24 sm:py-32">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          max-w-3xl
          mx-auto
          bg-white/5
          border border-white/10
          backdrop-blur-md
          rounded-[2rem]
          p-8 sm:p-12
          shadow-2xl
        "
      >

        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          A small message 💜
        </h2>

        <p className="
          whitespace-pre-line
          text-slate-300
          leading-9
          text-lg
          sm:text-xl
          text-center
        ">
          {mainMessage}
        </p>

      </motion.div>

    </div>
  );
};

export default BirthdayMessage;