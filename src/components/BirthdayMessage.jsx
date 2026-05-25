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

        {/* <p className="
          whitespace-pre-line
          text-slate-300
          leading-9
          text-lg
          sm:text-xl
          text-center
        ">
          {mainMessage}
        </p> */}


        <p
  className="
    whitespace-pre-line
    text-slate-300
    leading-9
    text-lg
    sm:text-xl
    text-center
  "
>

  I may not know your address,
  <br />
  but I’m genuinely glad life somehow connected us online.

  <br /><br />

  Thank you for the random conversations,
  <br />
  the laughs,
  <br />
  the guidance,
  <br />
  and the moments that made ordinary days feel lighter.

  <br /><br />

  Honestly,
  <br />
  this isn’t some attempt to impress you or make things dramatic 😭

  <br /><br />

  I just wanted to make something fun,
  <br />
  memorable,
  <br />
  and a little different...

  <br /><br />

  because you genuinely became an{" "}

  <span className="font-semibold text-purple-300 italic">
    important friend.
  </span>

  <br /><br />

  Hope this year brings you peace,
  <br />
  good health,
  <br />
  less stress,
  <br />
  and lots of genuinely happy moments.

  <br /><br />

  And most importantly —
  <br />
  I hope you always stay this simple and genuine.

</p>

      </motion.div>

    </div>
  );
};

export default BirthdayMessage;