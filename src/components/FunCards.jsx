import { motion } from "framer-motion";
import { funnyLines } from "../data/messages";

const FunCards = () => {
  return (
    <div  id="fun-section" className="px-5 py-24 sm:py-32 bg-slate-950">
      
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
        A few important observations 👀
      </h2>

      <div className="max-w-4xl mx-auto grid gap-6">
        
        {funnyLines.map((line, index) => (
          
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-md
              rounded-3xl
              p-6
              text-lg
              text-slate-200
              shadow-lg
            "
          >
            {line}
          </motion.div>

        ))}

      </div>
    </div>
  );
};

export default FunCards;