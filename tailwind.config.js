/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        0: "0",
        0.5: "0.5rem",
        1: "1rem",
        1.5: "1.5rem",
        2: "2rem",
        2.5: "2.5rem",
        3: "3rem",
        3.5: "3.5rem",
        4: "4rem",
        4.5: "4.5rem",
        5: "5rem",
        5.5: "5.5rem",
        6: "6rem",
        6.5: "6.5rem",
        7: "7rem",
        7.5: "7.5rem",
        8: "8rem",
        8.5: "8.5rem",
        9: "9rem",
        9.5: "9.5rem",
        10: "10rem",
        20: "20rem",
      },
      colors: {
        SoftBlue: "hsl(231, 69%, 60%)",
        SoftRed: "hsl(0, 94%, 66%)",
        GrayishBlue: "hsl(229, 8%, 60%)",
        VeryDarkBlue: "hsl(229, 31%, 21%)",
      },
      screens: {
        sm: "450px",
        md: "700px",
        lg: "900px",
      },
    },
  },
  plugins: [],
};
