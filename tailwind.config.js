/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",
  "./app/**/*.{js,jsx,ts,tsx}",
  "./src/**/*.{js,jsx,ts,tsx}",
  "*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {},
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  },
};
// eslint-disable-next-line no-undef
export const plugins = [require("tailwindcss-animate")];
