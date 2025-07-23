export default function tailwindContainers({ addUtilities }) {
  addUtilities({
    '.app': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
    },

    '.main': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: 'var(--container-max-width)',
      padding: '0 var(--section-padding-x)',
    },

    '.section': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      gap: 'var(--section-gap)',
    },

    '.section-paddings': {
      padding: 'var(--section-padding-y) 0',

    },

  });
}