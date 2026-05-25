import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const floatingMessages = [
  "bro 😭",
  // "send memes",
  // "drink water",
  // "sleep properly",
  // "stop overediting videos 🎬",
  "please remember water exists",
  "your meme collection deserves cloud storage at this point",
  "one day you'll actually sleep on time",
];

// const FinalSurprise = () => {
const FinalSurprise = ({ audioRef }) => {
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

        {/* {showSurprise && (
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
        )} */}

        {showSurprise && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            {/* Floating Messages */}
            <div className="flex flex-col gap-4 mb-12">
              {floatingMessages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.8,
                    duration: 0.5,
                  }}
                  className="
            bg-white/5
            border border-white/10
            rounded-2xl
            px-5
            py-3
            text-slate-200
            text-base
            sm:text-lg
            backdrop-blur-md
          "
                >
                  {msg}
                </motion.div>
              ))}
            </div>

            {/* Final Message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: floatingMessages.length * 0.8,
                duration: 0.6,
              }}
            >
              <h3 className="text-3xl sm:text-5xl font-bold mb-6">
                Happy Birthday 💜
              </h3>

              {/* <motion.video
              onPlay={() => {
  audioRef.current.pause();
}}
onEnded={() => {
  audioRef.current.play();
}}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: floatingMessages.length * 0.8 + 0.5,
                  duration: 0.8,
                }}
                autoPlay
                // muted
                controls
                loop
                playsInline
                className="
    mt-8
    w-full
    max-w-sm
    mx-auto
    rounded-3xl
    shadow-2xl
    border border-white/10
  "
              >
                <source src="public/music/wish_video.mp4" type="video/mp4" />
              </motion.video> */}
              {/* <motion.video
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: floatingMessages.length * 0.8 + 0.5,
                  duration: 0.8,
                }}
                autoPlay
                loop
                playsInline
                controls
                onPlay={() => {
                  audioRef.current.pause();
                }}
                // onEnded={() => {
                //   audioRef.current.play();
                // }}
                className="
    mt-8
    w-full
    max-w-sm
    mx-auto
    rounded-3xl
    shadow-2xl
    border border-white/10
  "
              >
                <source src="/music/wish_video.mp4" type="video/mp4" />
              </motion.video> */}
              <motion.video
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: floatingMessages.length * 0.8 + 0.5,
                  duration: 0.8,
                }}
                autoPlay
                loop
                playsInline
                controls
                onPlay={() => {
                  audioRef.current.pause();
                }}
                onPause={(e) => {
                  const video = e.target;

                  if (!video.ended) {
                    audioRef.current.play();
                  }
                }}
                className="
    mt-8
    w-full
    max-w-sm
    mx-auto
    rounded-3xl
    shadow-2xl
    border border-white/10
  "
              >
                <source src="/music/wish_video.mp4" type="video/mp4" />
              </motion.video>
            </motion.div>
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
