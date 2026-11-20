module.exports = {
  content: ['./src/components/ui/team-lanyard-rail.tsx'],
  important: '#hero-badge',
  darkMode: ['selector', '[data-theme="dark"]'],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)', foreground: 'var(--color-foreground)',
        card: 'var(--color-card)', 'card-foreground': 'var(--color-foreground)',
        muted: 'var(--color-muted)', 'muted-foreground': 'var(--color-muted-foreground)',
        border: 'var(--color-border)', ring: 'var(--focus)',
        chart: { 1: '#58c3e0', 2: '#58c3e0', 3: '#005b96', 4: '#83d9ed', 5: '#1b365d' },
      },
    },
  },
};
