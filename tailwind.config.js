// module.exports = {
//   content: [
//     "./src/**/*.{html,js,jsx,ts,tsx}",
//   ],
  
//   theme: {
//     extend: {
//       variants: {
//   scrollbar: ['rounded']
// }

//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Add this line
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#101c3d',
        'dark-text': '#ffffff',
        'light-bg': '#ffffff',
        'light-text': '#101c3d',
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
}