/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      dcBlue50: '#82C7E6',
      dcBlue100: '#ACD8E8',
      dcBlue200: '#82C7E7',
      dcBlue300: '#4BB1E0',
      dcBlue400: '#54C8E8',
      dcGreen50: '#A5DB6D',
      dcGreen100: '#C4DE96',
      dcGreen200: '#A1C86D',
      dcGreen300: '#92C058',
      dcGreen400: '#71A850',
      dcGreen500: '#89DC65',
      dcYellow100: '#EEEB7A',
      dcYellow200: '#E9E73C',
      dcYellow300: '#DDDF3F',
      dcYellow400: '#DFDF00',
      dcYellow500: '#E0DF00',
      dcGray50: '#F2F2F2',
      dcGray100: '#F1F1F2',
      dcGray200: '#828282',
      dcGray300: '#9FA0A1',
      dcBlack100: '#333333',
    },
    extend: {
      maxWidth: {
        dcContainer: '1200px',
        dcContainerSm: '1080px',
        dcContainerXs: '590px',
      },
      fontSize: {
        dcH1: '4.5rem',
        dcH2: '2rem',
        dcH4: '1.5rem',
        dcBody1: '1.25rem',
        dcBody2: '1.125rem',
        dcBody3: '1rem',
        dcCaption: '0.875rem',
      },
    },
  },
  plugins: [],
};
