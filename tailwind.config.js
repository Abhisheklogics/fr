// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
     
    
      screens: {
        'xs': {'min':'310px' ,'max':'770px'},
        'md': '768px',
        'xl': {'min':'770px' , 'max':'1380px'},
        'max': '1535px',
      },
    },
  },
  plugins: [],
}

/* keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(200px)',  },
          '25%': { transform: 'translateX(-200px)' },
          '50%': { transform: 'translateX(-200px)' },
          '75%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(100px)' },
        },
      },
      animation: {
        wiggle: 'wiggle  2s linear infinite',
      },*/