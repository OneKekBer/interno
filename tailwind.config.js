/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      // fontSize: {
      //    sm: "0.8rem",
      //    base: "1rem",
      //    xl: "1.25rem",
      //    "2xl": "1.563rem",
      //    "3xl": "1.953rem",
      //    "4xl": "2.441rem",
      //    "5xl": "3.052rem",
      // },
      extend: {
         colors: {
            brown: "#CDA274",
            dark: "#292F36",
            light: "#F4F0EC",
            lightdark: "#CDA274",
         },
         fontFamily: {
            jost: ["Jost"],
            serif: ["DM Serif Display"],
         },
      },
   },

   plugins: [],
};
