/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        fall: {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(100vh)",
            opacity: "1",
          },
        },
        "bounce-christmas": {
          "0%, 100%": {
            transform: "translateY(-20%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        wave: "wave 15s infinite linear",
        fall: "fall 2s ease-in-out",
        "bounce-christmas": "bounce-christmas 1.5s infinite;",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
