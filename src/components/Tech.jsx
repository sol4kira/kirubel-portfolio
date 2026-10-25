import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="flex flex-col items-center justify-center"
        >
          {isMobile ? (
            /* 2D Mobile Fallback: Eliminates 11 WebGL contexts, prevents context lost errors, and enables smooth scrolling */
            <div
              className="w-24 h-24 rounded-2xl bg-tertiary flex flex-col justify-center items-center p-3 shadow-card border border-white/5 active:scale-95 transition-transform"
              title={technology.name}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-11 h-11 object-contain select-none"
              />
              <p className="text-secondary text-[10px] font-medium mt-2 text-center tracking-wider select-none">
                {technology.name}
              </p>
            </div>
          ) : (
            /* Full 3D Floating Ball Canvas for Desktop */
            <div className="w-28 h-28" title={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tech;
