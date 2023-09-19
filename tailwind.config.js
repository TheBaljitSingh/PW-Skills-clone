/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      backgroundColor: {
      'custom-blue': '#334155',
    }  
   },
  },
  plugins: [],
}