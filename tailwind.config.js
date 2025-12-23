const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    // screens: {
    //   "2xl": { max: "1535px" },
    //   'xl': {'max': '1279px'},
    //   'lg': {'max': '1023px'},
    //   'md': {'max': '768px'},
    //   'sm': {'max': '639px'},
    // },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      accent: ["Rajdhani", "sans-serif"],
      mono: ["monospace"],
    },
    extend: {
      colors: {
        neon: {
          lime: '#84cc16',
          'lime-dark': '#65a30d',
          'lime-light': '#a3e635',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
});