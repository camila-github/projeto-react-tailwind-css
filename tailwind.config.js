module.exports = {
  purge: {
    content: ["./src/**/*.jsx", "./index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#4000FF",
          DEFAULT: "#29088A",
          dark: "#29088A",
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
      },
      boxShadow: {      
        '2xl': '0 26px 40px -1px rgba(0, 0, 0, 0.95)',
      },
      borderRadius: {
        full: '70%',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
