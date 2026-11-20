import { useRef, useState } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";

// Adapted from Manu Arora / Aceternity UI's Container Scroll Animation (MIT).
export default function ProjectVisual({ project }) {
  const target = useRef(null);
  const reduceMotion = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "center center"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <div ref={target} className="project-visual">
      <m.a
        className="project-image"
        href={project.link[1]}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir ${project.name}`}
        style={reduceMotion ? undefined : { rotateX, scale }}
        onPointerMove={(event) => {
          if (event.pointerType !== "mouse" || reduceMotion) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty(
            "--pointer-x",
            `${event.clientX - bounds.left}px`,
          );
          event.currentTarget.style.setProperty(
            "--pointer-y",
            `${event.clientY - bounds.top}px`,
          );
        }}
      >
        {failed ? (
          <span className="image-fallback">{project.name}</span>
        ) : (
          <img
            src={project.img}
            alt={`Vista de ${project.name}`}
            loading="lazy"
            width="1200"
            height="750"
            onError={() => setFailed(true)}
          />
        )}
        <span className="image-cta">Explorar proyecto</span>
      </m.a>
      <span className="visual-caption">{project.visualCaption}</span>
    </div>
  );
}
