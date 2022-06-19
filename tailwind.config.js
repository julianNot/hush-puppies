/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend : {
      fontFamily : {
        montserrat : ['monstserrat'],
      }
    },
    colors : {
      'nocturne-red' : '#7a4a58',
      'herring-silver' : '#c8c6cb',
      'paris-paving' : '#737374',
      'white' : '#ffffff',
    },
  },
  plugins: [],
}
