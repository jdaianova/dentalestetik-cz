export default function tailwindText({ addUtilities }) {
  addUtilities({
    '.text-paragraph': {
      fontSize: 'var(--font-size-paragraph)',
      lineHeight: 'var(--line-height-paragraph)',
    },

    '.font-title': {
      fontWeight: '700',
      lineHeight: '1',
      textTransform: 'uppercase',
    },

    '.font-bold': {
      fontWeight: '700',
    },

    '.font-numbers': {
      fontFamily: 'var(--font-numbers) !important',
      fontWeight: '600',
    },
    
    '.text-justify': {
      textAlign: 'justify',
    },

  });
}