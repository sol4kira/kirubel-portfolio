import { lazy, Suspense, useEffect, useState } from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import useInView from "../hooks/useInView";

// Each floating ball is a WebGL canvas, so the whole module is split out and
// only requested when the tech row is about to scroll into view.
const BallCanvas = lazy(() => import("./canvas/Ball"));

const TechnologyCard = ({ technology }) => (
  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-tertiary flex flex-col justify-center items-center p-3 shadow-card border border-white/5">
    <img
      src={technology.icon}
      alt={technology.name}
      width={44}
      height={44}
      loading="lazy"
      decoding="async"
      className="w-11 h-11 object-contain select-none"
    />
    <p className="text-secondary text-[10px] font-medium mt-2 text-center tracking-wider select-none">
      {technology.name}
    </p>
  </div>
);

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sectionRef, inView] = useInView("300px");

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
    <div
      ref={sectionRef}
      className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10"
    >
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="flex flex-col items-center justify-center"
        >
          {isMobile || !inView ? (
            /* Lightweight 2D card until the section is near the viewport */
            <TechnologyCard technology={technology} />
          ) : (
            /* Full 3D floating ball for desktop, once in view */
            <div className="w-28 h-28" title={technology.name}>
              <Suspense fallback={<TechnologyCard technology={technology} />}>
                <BallCanvas icon={technology.icon} />
              </Suspense>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
