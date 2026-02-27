import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";

export const useInViewAnimation = (options = { once: true, amount: 0.3 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, controls, isInView };
};