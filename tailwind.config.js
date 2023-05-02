/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#E07A5F',
        accent: '#5f9ea0',
        light: '#E9E8E5',
        primary_disabled: '#474b50',
        bg: '#252422',
        // ...
      }
    }
  },
  plugins: [],
}