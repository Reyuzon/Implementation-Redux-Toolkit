/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#f8f8f8",
        dark: "#2b2b2b",
        gray: "#666",
      },
      dropShadow: {
        iconMode: "0 0 2px rgba(0,0,0,0.5)",
      },
      boxShadow: {
        toggle: `inset 0 8px 60px rgba(0,0,0,0.1), 
                 inset 0 8px 8px rgba(0,0,0,0.1), 
                 inset 0 -4px 4px rgba(0,0,0,0.1)`,
      },
      clipPath: {
        off: "circle(0% at 50% 50%)",
        active: " circle(150% at 50% 50%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-off": {
          clipPath: "circle(0% at 50% 50%)",
        },
        ".clip-on": {
          clipPath: "circle(150% at 50% 50%)",
        },
      });
    },
  ],
};
