/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clashDisplay: ['Clash Display', "sans-serif"],
        montserrat: ['Montserrat', "sans-serif"],
        unica: ['Unica One', 'cursive']
      },
      colors:{
        getlinkedPurple: "#150E28",
        primaryPink: "#D434FE"
      },
       backgroundImage: {
        'btnBgGrad': ["linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)"],
        'heroLineCurve': "url('src/assets/icons/line-curve.svg')",
        'checkMark': "url('src/assets/icons/check-mark.png')",
      },
       backgroundSize: {
         '30%': '30%',
       },
       boxShadow: {
        'treeCounter': '0 0 0 8px #150E28',
        'contactForm': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'input': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
        animation: {
        'fadeInLeft': 'fadeInLeft 0.6s 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'fadeInRight': 'fadeInRight 0.6s 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'fadeInUp': 'fadeInUp 0.6s 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'bounceInTop': 'bounceInTop 1.1s 1.3s ease-in-out both',
      },
      keyframes: {
        slideDown: {
          '100%': { translate: '0 100%' },
        },
        slideUp: {
          '100%': { translate: '0 -100%' },
        },
        hide: {
          '100%': { display: 'none' },
        },
        fadeInLeft: {
          '0%': { translate: '-100px', opacity: '0' },
          '100%': { translate: '0', opacity: '1' },
        },
        fadeInRight: {
          '0%': { translate: '100px', opacity: '0' },
          '100%': { translate: '0', opacity: '1' },
        },
        fadeInUp: {
          '0%': { translate: '0 100px', opacity: '0' },
          '100%': { translate: '0 0', opacity: '1' },
        },
        bounceInTop: {
          '0%': { translate: '0 -300px', opacity: '0' },
          '38%': { translate: '0 0'},
          '55%': { translate: '0 -45px'},
          '72%': { translate: '0 0'},
          '81%': { translate: '0 -15px'},
          '90%': { translate: '0 0', opacity: '1'},
          '95%': { translate: '0 -8px'},
          '100%': { translate: '0 0', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

