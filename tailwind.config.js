module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto, sans-serif",
    },
    extend: {
      colors: {
        // The primary color is used for the main color of the app. like the background color of the app.
        primary: {
          main: "#ffffff",
          contrastText: "#B6246F",
        },
        //secondary color applies to either the texts of the app or the borders of the app.
        secondary: {
          main: "#FE8D17",
          contrastText: "#ffffff",
        },
        //tertiary color applies to the borders of the app.
        tertiary: {
          main: "#B6246F",
          contrastText: "#ffffff",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
