export default function tailwindColors({ addUtilities }) {
  addUtilities({
    '.bg-primary': {
      backgroundColor: 'var(--color-primary)',
    },

    '.bg-primary-light': {
      backgroundColor: 'var(--color-primary-light)',
    },

    '.bg-primary-dark': {
      backgroundColor: 'var(--color-primary-dark)',
    },

    '.bg-primary-soft': {
      backgroundColor: 'var(--color-primary-soft)',
    },

    '.bg-subtle': {
      backgroundColor: 'var(--color-subtle)',
    },

    '.color-primary': {
      color: 'var(--color-primary)',
    },

    '.color-primary-dark': {
      color: 'var(--color-primary-dark)',
    },

    '.color-caption': {
      color: 'var(--color-text-caption)',
    },

    '.color-border': {
      color: 'var(--color-border)',
    },

    '.color-text-dark': {
      color: 'var(--color-text-dark)',
    },

  });
}