import { useEffect, useState } from "react";
import { m, useMotionValue, useReducedMotion, useSpring } from "motion/react";

export default function AmbientBackground({ containerRef, paused }) {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 35, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 35, damping: 22 });
  const active = !paused && !reduceMotion && visible && pageVisible;

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    observer.observe(element);
    const updateVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, [containerRef]);

  useEffect(() => {
    const element = containerRef.current;
    const reset = () => {
      x.set(0);
      y.set(0);
    };
    if (!active || !element) {
      reset();
      return;
    }
    const move = (event) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      const bounds = element.getBoundingClientRect();
      x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 100);
      y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 70);
    };
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", reset);
    return () => {
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
    };
  }, [active, containerRef, x, y]);

  return (
    <div className="ambient-background" aria-hidden="true" data-active={active}>
      <m.div
        className="ambient-pointer"
        style={{ x: reduceMotion ? 0 : smoothX, y: reduceMotion ? 0 : smoothY }}
      >
        <div className="ambient-cloud ambient-cloud-navy" />
        <div className="ambient-cloud ambient-cloud-blue" />
        <div className="ambient-cloud ambient-cloud-cyan" />
      </m.div>
      <div className="ambient-reading-shade" />
    </div>
  );
}
