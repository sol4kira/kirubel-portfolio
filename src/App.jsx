import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Companies,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import useInView from "./hooks/useInView";

// Starfield is a WebGL canvas; load it only when the contact area is near.
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const StarsBackground = () => {
  const [ref, inView] = useInView("200px");

  return (
    <div ref={ref}>
      {inView && (
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
      )}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative bg-primary overflow-hidden">
          {/* Responsive hero background; only the AVIF variant is preloaded. */}
          <picture className="absolute inset-0">
            <source
              type="image/avif"
              srcSet="/images/hero-768.avif 768w, /images/hero-1280.avif 1280w, /images/hero-1920.avif 1920w"
              sizes="100vw"
            />
            <img
              src="/images/hero-1280.webp"
              srcSet="/images/hero-768.webp 768w, /images/hero-1280.webp 1280w, /images/hero-1920.webp 1920w"
              sizes="100vw"
              width={1920}
              height={1044}
              alt=""
              aria-hidden="true"
              fetchpriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </picture>

          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Companies />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsBackground />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
