module.exports = {
  theme: {
    fontFamily: {
      display: ["Comfortaa", "sans-serif"],
      body: ["Roboto", "sans-serif"],
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
    },
  },
  purge: {
    content: ["./{components,content,pages}/**/*.{js,mdx,ts,tsx,jsx}"],
  },
  plugins: [require("@tailwindcss/typography")],
};
