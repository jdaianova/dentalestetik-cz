export default function tailwindAnimation({ addUtilities }) {
  addUtilities({
    '.animate-grow-down': {
      animation: 'growDown 0.4s ease-out forwards',
      transformOrigin: 'top',
    },
    '.animate-grow-up': {
      animation: 'growUp 0.8s ease-in forwards',
      transformOrigin: 'top',
    },
    '@keyframes growDown': {
      '0%': { transform: 'scaleY(0)' },
      '100%': { transform: 'scaleY(1)' },
    },
    '@keyframes growUp': {
      '0%': { transform: 'scaleY(1)' },
      '100%': { transform: 'scaleY(0)' },
    },
  });
}
