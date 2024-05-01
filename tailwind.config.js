/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#377cfb",
          secondary: "#66cc8a",
          accent: "#a992f7",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#16a249",
          warning: "#fbbd23",
          error: "#e01a2e",
        },
      },
    ],
  },
  safelist: [
    {
      pattern: /grid-cols-+/,
    },
    {
      pattern: /col-span-+/,
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-service-card-s1":
          "linear-gradient(to left, rgba(255, 255, 255, 0.99), rgba(255, 255, 255, 0.7)), url('../public/ss1.png')",
        "gradient-service-card-s2":
          "linear-gradient(to left, rgba(255, 255, 255, 0.99), rgba(255, 255, 255, 0.7)), url('../public/ss2.png')",
        "gradient-service-card-s3":
          "linear-gradient(to right, rgba(255, 255, 255, 0.99), rgba(255, 255, 255, 0)), url('../public/s3.webp')",
        "gradient-service-card-s4":
          "linear-gradient(to right, rgba(255, 255, 255, 0.99), rgba(255, 255, 255, 0)), url('../public/s4.webp')",
      },
    },
    backgroundImage: {
      loginBG: "url('../public/bg.png')",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      gray1: "#F8FAFB",
      blue1: "#1C6BA4",
      blue2: "#EDF4FF",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      blue1: "#1C6BA4",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      blue1: "#1C6BA4",
    }),
  },
  plugins: [require("daisyui")],
};
