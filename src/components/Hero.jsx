import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Kirubel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop full-stack web applications, relational databases, <br className="sm:block hidden" />
            and interactive user experiences.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 z-20 pointer-events-auto">
            <a
              href="/Kirubel_Solomon_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-[#915eff] text-white font-semibold py-2.5 px-6 rounded-xl hover:bg-[#7d48e8] transition-all flex items-center gap-2 shadow-lg shadow-[#915eff]/30 text-[15px] cursor-pointer pointer-events-auto"
            >
              View Resume
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
              </svg>
            </a>
            <a
              href="/Kirubel_Solomon_Resume.pdf"
              download="Kirubel_Solomon_Resume.pdf"
              className="bg-tertiary text-white font-semibold py-2.5 px-6 rounded-xl hover:bg-white hover:text-primary transition-all flex items-center gap-2 text-[15px] border border-white/10 cursor-pointer pointer-events-auto"
            >
              Download CV
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
