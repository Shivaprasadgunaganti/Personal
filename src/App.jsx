// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// // import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App



// import Hero from "./components/Hero";

// function App() {
//   return (
//     <div>
//       <Hero />
    
//     </div>
//   );
// }

// export default App;

// import Hero from "./components/Hero";
// import FunCards from "./components/FunCards";
// import BirthdayMessage from "./components/BirthdayMessage";
// import FinalSurprise from "./components/FinalSurprise";
// import MusicPlayer from "./components/MusicPlayer";

// // function App() {
// //   return (
// //     <div>
// //       <MusicPlayer/>
// //       <Hero />
// //       <FunCards />
// //       <BirthdayMessage/>  
// //       <FinalSurprise/>
// //     </div>
// //   );
// // }


// function App() {
//   return (
//     <div className="bg-slate-950 overflow-hidden">

//       <MusicPlayer />

//       <Hero />

//       <FunCards />

//       <BirthdayMessage />

//       <FinalSurprise />

//     </div>
//   );
// }

// export default App;




import { useRef, useState ,useEffect} from "react";

import Hero from "./components/Hero";
import FunCards from "./components/FunCards";
import BirthdayMessage from "./components/BirthdayMessage";
import FinalSurprise from "./components/FinalSurprise";
import MusicPlayer from "./components/MusicPlayer";
import { AnimatePresence } from "framer-motion";
import IntroScreen from "./components/IntroScreen";

function App() {

  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleMusic = () => {

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {

  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);

}, []);

  return (
    <div className="bg-slate-950 overflow-hidden">

<AnimatePresence>
  {loading && <IntroScreen />}
</AnimatePresence>
      <audio
        ref={audioRef}
        src="/music/song.mp3"
        loop
      />

      <MusicPlayer
        isPlaying={isPlaying}
        toggleMusic={toggleMusic}
      />

      <Hero
        toggleMusic={toggleMusic}
        isPlaying={isPlaying}
      />

      <FunCards />

      <BirthdayMessage />

      {/* <FinalSurprise /> */}
      <FinalSurprise audioRef={audioRef} />

    </div>
  );
}

export default App;

// https://personal-murex-seven.vercel.app/