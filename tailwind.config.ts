import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0A157A',
        'background-gray': '#F6F6F9',
        // Figma color palette
        'box-bg': '#E5E7EB',
        'box-border': '#C8C8D2',
        'heading-blue': '#16215E',
        'body-gray': '#808080',
        'text-black': '#141414',
        'section-heading': '#5F7693',
        'button-blue': '#0A1464',
      },
    },
  },
  plugins: [],
};

export default config;

