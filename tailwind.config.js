import tailwindAnimation from './src/app/styles/tailwind/tailwind.animation';
import tailwindColors from './src/app/styles/tailwind/tailwind.colors';
import tailwindContainers from './src/app/styles/tailwind/tailwind.containers';
import tailwindDesign from './src/app/styles/tailwind/tailwind.design';
import tailwindText from './src/app/styles/tailwind/tailwind.text';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindColors,
    tailwindContainers,
    tailwindDesign,
    tailwindText,
    tailwindAnimation,
  ],
}

