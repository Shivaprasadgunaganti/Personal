// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     // <div className="min-h-screen flex items-center justify-center px-6 text-center bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
//           <div className="min-h-[100svh] flex items-center justify-center px-6 text-center bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight"> */}
//                 {/* <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"> */}
//                 <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">

//           Hey 👋 <br />
//           Today is your day.
//         </h1>

//         {/* <p className="text-slate-300 text-lg md:text-xl max-w-xl mx-auto mb-8"> */}
//                 <p className="text-slate-300 text-lg md:text-xl max-w-md sm:max-w-xl mx-auto mb-8">

//           I didn’t want to send just another birthday text.
//         </p>

//         {/* <button className="bg-purple-600 hover:bg-purple-500 transition px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-purple-500/30">
//           Open Surprise 🎁
//         </button> */}
//         {/* <motion.button
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   className="bg-purple-600 hover:bg-purple-500 transition px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-purple-500/30"
// >
//   Open Surprise 🎁
// </motion.button> */}

// <motion.button
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   onClick={() => {
//     document
//       .getElementById("fun-section")
//       ?.scrollIntoView({ behavior: "smooth" });
//   }}
//   className="
//     bg-purple-600
//     hover:bg-purple-500
//     transition
//     px-8
//     py-4
//     rounded-full
//     text-lg
//     font-semibold
//     shadow-lg
//     shadow-purple-500/30
//   "
// >
//   Open Surprise 🎁
// </motion.button>
//       </motion.div>

//     </div>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";

// const Hero = () => {
    const Hero = ({ toggleMusic, isPlaying }) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        min-h-[100svh]
        flex
        items-center
        justify-center
        px-6
        text-center
        bg-gradient-to-b
        from-slate-950
        via-purple-950
        to-slate-950
      "
    >

      {/* Ambient Glow Effects */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-52 h-52 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >

        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-bold
            mb-6
            leading-[1.1]
          "
        >
          Hey 👋 <br />
          Today is your day.
        </h1>

        <p
          className="
            text-slate-300
            text-lg
            md:text-xl
            max-w-md
            sm:max-w-xl
            mx-auto
            mb-8
            leading-8
          "
        >
          I didn’t want to send just another birthday text.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        //   onClick={() => {
        //     document
        //       .getElementById("fun-section")
        //       ?.scrollIntoView({ behavior: "smooth" });
        //   }}
        onClick={() => {

  if (!isPlaying) {
    toggleMusic();
  }

  document
    .getElementById("fun-section")
    ?.scrollIntoView({ behavior: "smooth" });

}}
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
          Open Surprise 🎁
        </motion.button>

      </motion.div>

    </div>
  );
};

export default Hero;