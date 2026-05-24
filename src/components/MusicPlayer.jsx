// import { useRef, useState } from "react";
// import { FaMusic, FaPause } from "react-icons/fa";
// import { motion } from "framer-motion";

// const MusicPlayer = () => {

//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const toggleMusic = () => {

//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }

//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <>
//       <audio
//         ref={audioRef}
//         src="/music/birthday-song.mp3"
//         loop
//       />

//       <motion.button
//         whileTap={{ scale: 0.9 }}
//         onClick={toggleMusic}
//         className="
//           fixed
//           bottom-6
//           right-6
//           z-50
//           w-14
//           h-14
//           rounded-full
//           bg-purple-600
//           hover:bg-purple-500
//           shadow-lg
//           shadow-purple-500/30
//           flex
//           items-center
//           justify-center
//           text-white
//           text-xl
//         "
//       >
//         {isPlaying ? <FaPause /> : <FaMusic />}
//       </motion.button>
//     </>
//   );
// };

// export default MusicPlayer;


import { FaMusic, FaPause } from "react-icons/fa";
import { motion } from "framer-motion";

const MusicPlayer = ({ isPlaying, toggleMusic }) => {

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleMusic}
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-14
        h-14
        rounded-full
        bg-purple-600
        hover:bg-purple-500
        shadow-lg
        shadow-purple-500/30
        flex
        items-center
        justify-center
        text-white
        text-xl
      "
    >
      {isPlaying ? <FaPause /> : <FaMusic />}
    </motion.button>
  );
};

export default MusicPlayer;