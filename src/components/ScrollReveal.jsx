import { m, useReducedMotion } from "motion/react";

// Animate once, with a low threshold so long sections also reveal on mobile.
export default function ScrollReveal({
  as = "div",
  delay = 0,
  distance = 28,
  children,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const Component = m[as];

  return (
    <Component
      {...props}
      initial={reduceMotion ? false : { opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}
