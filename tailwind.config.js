/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        blue: "#4a69e2",
        yellow: "#ffa52f",
        white: {
          DEFAULT: "#FFFFFF",
          fa: "#FAFAFA",
        },
        gray: {
          DEFAULT: "#E7E7E3",
          main: "#70706E",
          dark: "#232321",
        },
      },

      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },

      keyframes: {
        "slide-down": {
          "0%": {
            maxHeight: "0",
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            maxHeight: "500px",
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            maxHeight: "500px",
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            maxHeight: "0",
            opacity: "0",
            transform: "translateY(-20px)",
          },
        },
        "slide-down-size": {
          "0%": {
            maxHeight: "0",
            opacity: "0",
            transform: "translateY(-200px)",
          },
          "100%": {
            maxHeight: "700px",
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        "slide-down": "slide-down 0.5s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "slide-down-size": "slide-down 0.5s ease-out forwards",
      },
    },
  },

  plugins: [],
};
