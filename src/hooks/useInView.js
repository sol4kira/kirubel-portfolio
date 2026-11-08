import { useEffect, useRef, useState } from "react";

// Returns a ref plus a flag that flips to true once the element is close to
// the viewport. Used to keep heavy 3D canvases out of the first load.
const useInView = (rootMargin = "300px") => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return;

    // Older browsers without IntersectionObserver simply load the content.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return [ref, inView];
};

export default useInView;
