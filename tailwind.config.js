module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}', // for ShadCN components
  ],
  theme: {
    extend: {
      colors: {
        bronze: "#cd7f32", // Adjust bronze color as needed
        silver: "#c0c0c0",  // Adjust silver color as needed
        gold: "#ffd700",    // Adjust gold color as needed
      },
    },
  },
  plugins: [],
}