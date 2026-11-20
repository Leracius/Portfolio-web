import { useReducedMotion } from 'motion/react';
import { useTypewriter } from 'react-simple-typewriter';

const lines = ['De una idea', 'a una experiencia', 'que funciona.'];
const title = lines.join('\n');
const words = [title];

function TitleLines({ text, animated = false }) {
  const written = text.split('\n');
  return lines.map((line, index) => (
    <span
      key={line}
      className={`hero-type-line${index === lines.length - 1 ? ' hero-type-accent' : ''}`}
      aria-hidden="true"
    >
      {/* The complete line reserves its final size, including mobile wrapping. */}
      <span className="hero-type-reserved">{line}</span>
      <span className="hero-type-written">
        {written[index] ?? ''}
        {animated && text.length < title.length && index === written.length - 1 && (
          <span className="hero-type-cursor" />
        )}
      </span>
    </span>
  ));
}

function TypedLines() {
  const [text] = useTypewriter({ words, loop: 1, typeSpeed: 45 });
  return <TitleLines text={text} animated />;
}

export default function HeroTitle() {
  const reduceMotion = useReducedMotion();
  return (
    <h1 aria-label={lines.join(' ')}>
      {reduceMotion ? <TitleLines text={title} /> : <TypedLines />}
    </h1>
  );
}
