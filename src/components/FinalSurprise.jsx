import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const FinalSurprise = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div className="relative bg-slate-950 px-6 py-24 sm:py-32 overflow-hidden">
      {/* {showSurprise && <Confetti />} */}
      {showSurprise && <Confetti numberOfPieces={180} recycle={false} />}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          max-w-3xl
          mx-auto
          text-center
          bg-white/5
          border border-white/10
          backdrop-blur-md
          rounded-[2rem]
          p-10 sm:p-14
          shadow-2xl
        "
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-8">
          One last thing 🎁
        </h2>

        <p className="text-slate-300 text-lg sm:text-xl leading-8 mb-10">
          Click the button only if you’re ready for maximum birthday energy.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowSurprise(true)}
          className="
            bg-purple-600
            hover:bg-purple-500
            transition
            px-8
            py-4
            rounded-full
            text-lg
            font-semibold
            shadow-lg
            shadow-purple-500/30
          "
        >
          Reveal Surprise ✨
        </motion.button>

        {showSurprise && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <h3 className="text-3xl sm:text-5xl font-bold mb-6">
              Happy Birthday 💜
            </h3>

            <p className="text-slate-300 text-lg sm:text-xl leading-8">
              Stay the same. The world already has enough fake people.
            </p>
          </motion.div>
        )}
        <p className="mt-10 text-sm text-slate-500">
  Made with caffeine and good intentions ✨
</p>
      </motion.div>
      
    </div>
  );
};

export default FinalSurprise;
