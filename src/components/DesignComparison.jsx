import { useState } from "react";

export default function DesignComparison({ project }) {
  const [open, setOpen] = useState(false);
  const panelId = `${project.id}-design-comparison`;
  const embedUrl = new URL(project.figmaUrl);
  embedUrl.hostname = "embed.figma.com";
  embedUrl.searchParams.set("embed-host", "axel-quintana-portfolio");

  return (
    <div className="design-comparison">
      <button
        className="disclosure-button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        Comparar diseño y aplicación{" "}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div id={panelId} hidden={!open}>
        {open && (
          <div className="comparison-grid">
            <figure>
              <figcaption>El punto de partida · Figma</figcaption>
              <iframe
                src={embedUrl.toString()}
                title={`Diseño de ${project.name} en Figma`}
                loading="lazy"
                allowFullScreen
              />
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir archivo en Figma
              </a>
            </figure>
            <figure>
              <figcaption>La implementación · Web</figcaption>
              <a
                href={project.link[1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.img}
                  alt={`Implementación de ${project.name}`}
                  loading="lazy"
                  width="1200"
                  height="750"
                />
              </a>
              <p>
                Del mockup móvil a una aplicación adaptable, con catálogo,
                lectura de códigos y administración.
              </p>
            </figure>
          </div>
        )}
      </div>
    </div>
  );
}
