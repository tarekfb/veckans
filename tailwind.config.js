
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bgBright: '#f3f4f6',
        bgDark: '#1a1a1a',
        bgBlue: '#d7e1f5',
        accentGreen: '#00cc66',
        textBright: '#333',
        textDark: '#fff',
        focus: "#007BFF",
        focusDark: "#0051a8",
        successGreen: '#00cc66'
      },
    },
  },
  plugins: [
    require('daisyui')
  ]
};