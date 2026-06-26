/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0a0f1e",
          800: "#0d1529",
          700: "#111d35",
          600: "#162040",
        },
        cyan: {
          400: "#00e5ff",
          500: "#00b4d8",
        },
      },
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
        sans: ["'Exo 2'", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          from: { textShadow: "0 0 10px #00e5ff, 0 0 20px #00e5ff" },
          to: { textShadow: "0 0 20px #00e5ff, 0 0 40px #00e5ff, 0 0 60px #00e5ff" },
        },
      },
    },
  },
  plugins: [],
};
