import { useEffect, useState } from "react";
import projects from "../projects.json";
import "./styles/App.css";
const email = "lucasaxelqg15@gmail.com";
const github = "https://github.com/Leracius";
const linkedin = "https://www.linkedin.com/in/axel-quintana/";
const Arrow = () => <span aria-hidden="true">↗</span>;
function ProjectCard({ project, index }) {
  const [failed, setFailed] = useState(false);
  return (
    <article className="project-card">
      <a
        className="project-image"
        href={project.link[1]}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir ${project.name}`}
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
        <span className="image-cta">
          Explorar proyecto <Arrow />
        </span>
      </a>
      <div className="project-copy">
        <span className="eyebrow project-category">{project.category}</span>
        <div className="project-heading">
          <span className="project-number">0{index + 1}</span>
          <h3>{project.name}</h3>
          <Arrow />
        </div>
        <p>{project.desc}</p>
        <ul className="tags" aria-label="Tecnologías">
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.link[1]} target="_blank" rel="noopener noreferrer">
            Ver proyecto <Arrow />
          </a>
          <a href={project.link[0]} target="_blank" rel="noopener noreferrer">
            Código <Arrow />
          </a>
        </div>
        <div className="project-details">
          {project.details?.map((detail) => (
            <div key={detail.title}>
              <h4>{detail.title}</h4>
              <p>{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#141813" : "#f7f8f2");
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* The theme still works when storage is unavailable. */
    }
  }, [theme]);
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header wrapper">
        <a
          className="wordmark"
          href="#inicio"
          aria-label="Axel Quintana, inicio"
        >
          aq<span>.</span>
        </a>
        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label="Modo oscuro"
            aria-pressed={theme === "dark"}
            title={
              theme === "dark"
                ? "Cambiar a modo claro"
                : "Cambiar a modo oscuro"
            }
            onClick={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
          >
            <span className="theme-icon" aria-hidden="true">
              <svg
                className="sun-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
              </svg>
              <svg
                className="moon-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.6 14.1A9 9 0 0 1 9.9 3.4a9 9 0 1 0 10.7 10.7Z" />
              </svg>
            </span>
            <span className="theme-label">
              {theme === "dark" ? "Oscuro" : "Claro"}
            </span>
          </button>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Cerrar −" : "Menú +"}
          </button>
          <nav
            id="navigation"
            className={menuOpen ? "navigation open" : "navigation"}
            aria-label="Principal"
          >
            {[
              ["proyectos", "Proyectos"],
              ["sobre-mi", "Sobre mí"],
              ["contacto", "Contacto ↗"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="contenido">
        <section className="hero wrapper" id="inicio">
          <div className="eyebrow">
            <span className="status-dot" /> AXEL QUINTANA · DESARROLLADOR
            FULLSTACK
          </div>
          <h1>
            De una idea
            <br />a una experiencia
            <br />
            <span>que funciona.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Construyo aplicaciones web conectando interfaces claras con la
              lógica que las hace posibles. Desde Córdoba, Argentina.
            </p>
            <a className="button button-dark" href="#proyectos">
              Explorá mis proyectos <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-footnote">
            <span>INTERFACES + LÓGICA + CURIOSIDAD</span>
            <span>REACT / TYPESCRIPT / NODE.JS</span>
          </div>
        </section>
        <section className="projects-section" id="proyectos">
          <div className="wrapper">
            <div className="section-top">
              <div>
                <span className="eyebrow">01 / TRABAJO SELECCIONADO</span>
                <h2>
                  Ideas llevadas
                  <br />
                  al código<span className="green">.</span>
                </h2>
              </div>
              <p>
                Un recorrido por lo que construyo,
                <br /> desde la idea hasta la aplicación.
              </p>
            </div>
            <div
              className={
                projects.length === 1
                  ? "project-grid single-project"
                  : "project-grid"
              }
            >
              {projects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
        <section className="about wrapper" id="sobre-mi">
          <div>
            <span className="eyebrow">02 / DETRÁS DEL CÓDIGO</span>
            <h2>
              Hola, soy Axel.
              <br />
              <span className="muted">Me gusta construir.</span>
            </h2>
            <p>
              Mi trabajo recorre ambos lados de una aplicación: lo que ves en
              pantalla y lo que sucede en el servidor. En mis proyectos exploro
              interfaces, APIs, autenticación y persistencia de datos.
            </p>
            <p>
              Me interesa que cada parte tenga sentido: una interfaz que se
              entienda y una base que permita seguir creciendo.
            </p>
            <a
              className="text-link"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conocé mi perfil en LinkedIn <Arrow />
            </a>
          </div>
          <div className="toolbox">
            <span className="eyebrow">MI CAJA DE HERRAMIENTAS</span>
            {[
              ["Frontend", "React · TypeScript · JavaScript · CSS"],
              ["Backend", "Node.js · Express · MongoDB"],
              ["Ecosistema", "Git · Vite · Redux · Material UI"],
            ].map(([title, tools], i) => (
              <div className="tool-row" key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{tools}</p>
                </div>
              </div>
            ))}
            <a href={github} target="_blank" rel="noopener noreferrer">
              Más código en GitHub <Arrow />
            </a>
          </div>
        </section>
        <section className="contact-section" id="contacto">
          <div className="wrapper">
            <span className="eyebrow">03 / SIGUIENTE PASO</span>
            <h2>
              ¿Construimos
              <br />
              algo <em>juntos?</em>
            </h2>
            <div className="contact-bottom">
              <p>
                Si tenés un proyecto en mente o querés
                <br /> conversar sobre una oportunidad, escribime.
              </p>
              <a className="button button-green" href={`mailto:${email}`}>
                Hablemos por correo <Arrow />
              </a>
            </div>
            <a className="email-link" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </section>
      </main>
      <footer className="wrapper footer">
        <span>© {new Date().getFullYear()} Axel Quintana</span>
        <span>Córdoba, Argentina</span>
        <div>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub <Arrow />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <Arrow />
          </a>
          <a
            href="https://wa.me/543517897659"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp <Arrow />
          </a>
        </div>
      </footer>
    </>
  );
}
