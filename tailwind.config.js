// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        // make Orbitron the default “sans”
        sans: ["Orbitron", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
