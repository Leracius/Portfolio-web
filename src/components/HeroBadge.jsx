import TeamLanyardRail from './ui/team-lanyard-rail';
import '../styles/lanyard.css';

const profile = [{
  id: 'axel-quintana',
  name: 'Axel Quintana',
  role: 'Desarrollador Fullstack',
  team: 'Córdoba · Argentina',
  image: '/axel-portrait.png',
  tone: 1,
  drop: 6,
  bio: 'Construyo aplicaciones web conectando interfaces claras con la lógica que las hace posibles.',
  tags: ['React', 'TypeScript', 'Node.js'],
  links: [
    { label: 'GitHub', href: 'https://github.com/Leracius' },
    { label: 'Email', href: 'mailto:lucasaxelqg15@gmail.com' },
  ],
}];

const labels = {
  flip: 'Hacé clic o presioná Enter para girar.',
  back: 'Volvé a hacer clic o presioná Esc para volver.',
  show: 'Mostrar',
};

export default function HeroBadge() {
  return (
    <div id="hero-badge">
      <TeamLanyardRail
        items={profile}
        labels={labels}
        caption="Arrastrá la credencial o hacé clic para girarla."
      />
    </div>
  );
}
