
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
     
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "007BFF",
          secondary: "teal",
          "base-100": "#f3f4f6",
          "base-200": "#d7e1f5",

        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-200": "#011c27",
        },
      },

    ],
  },
};