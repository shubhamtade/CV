/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceLeft: {
          "0%, 100%": { transform: "translateX(-25%)", opacity: "0" },
          "50%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "ping-slow": "ping 2s linear infinite",
        bounceLeft: "bounceLeft 1s infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
