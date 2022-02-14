const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    fontFamily: {
      display: ["ComfortaaVariable", "sans-serif"],
      body: ["InterVariable", "sans-serif"],
    },
    extend: {
      spacing: {
        96: "24rem",
        128: "32rem",
        "1/5": "20%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "1/3": "33%",
        "2/3": "67%",
      },
      colors: {
        gray: colors.slate,
        primary: colors.violet,
      },
    },
  },
  content: ["./{components,content,pages}/**/*.{js,mdx,ts,tsx,jsx}"],
  plugins: [require("@tailwindcss/typography")],
};
