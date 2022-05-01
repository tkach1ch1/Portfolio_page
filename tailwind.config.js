module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'lg': {'max':"998px"},
      'md': {'max':"768px"},
      'sm': {'max':"480px"}
    },
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        lightGray: '#828282',
      }
    },
  },
  plugins: [],
}
