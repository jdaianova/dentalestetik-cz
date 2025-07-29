export default function tailwindDesign({ addUtilities }) {
  addUtilities({
    '.with-bottom-border': {
      borderBottom: '2px solid var(--color-border)',
    },

    '.with-header-border': {
      borderBottom: '2px solid var(--color-primary)',
    },

    '.mobile-menu-border': {
      borderTop: '2px solid var(--color-primary)',
    },

    '.border-primary': {
      border: '1px solid var(--color-primary)',
    },

    '.text-block': {
      backgroundColor: 'var(--color-primary-light)',
      padding: 'var(--text-block-padding-y) var(--section-padding-x)',
    },

  });
}