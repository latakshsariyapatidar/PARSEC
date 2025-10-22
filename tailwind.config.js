/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        page_lg: "1600px",
        page: "1300px",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        hero: ["Orbitron", "Poppins", "sans-serif"],
      },
      boxShadow: {
        medium:
          "0px 0px 15px 0px rgba(0,0,0,.06),0px 2px 30px 0px rgba(0,0,0,.22),inset 0px 0px 1px 0px hsla(0,0%,100%,.15)",
        'blue-glow': '0 8px 24px rgba(59, 130, 246, 0.3), 0 16px 56px rgba(59, 130, 246, 0.2), 0 24px 80px rgba(59, 130, 246, 0.1)',
        'cyan-glow': '0 8px 24px rgba(6, 182, 212, 0.3), 0 16px 56px rgba(6, 182, 212, 0.2), 0 24px 80px rgba(6, 182, 212, 0.1)',
        'indigo-glow': '0 8px 24px rgba(99, 102, 241, 0.3), 0 16px 56px rgba(99, 102, 241, 0.2), 0 24px 80px rgba(99, 102, 241, 0.1)',
        'sky-glow': '0 8px 24px rgba(14, 165, 233, 0.3), 0 16px 56px rgba(14, 165, 233, 0.2), 0 24px 80px rgba(14, 165, 233, 0.1)',
        'black-subtle': '0 10px 30px 5px rgba(0, 0, 0, 0.2)',
        'black-medium': '0 0 20px rgba(0, 0, 0, 0.7)',
        'black-strong': '0 5px 20px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        'custom-width': '910px',
      },
      backgroundImage: {
        'gradient-blue-cyan': 'linear-gradient(to right, #3b82f6, #06b6d4)',
        'gradient-indigo-blue': 'linear-gradient(135deg, #6366f1, #3b82f6)',
        'gradient-sky-blue': 'linear-gradient(to right, #0ea5e9, #3b82f6)',
        'gradient-dark-blue': 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.gradient-text': {
          background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
          '-webkit-background-clip': 'text',
          '-moz-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.gradient-text-blue-sky': {
          background: 'linear-gradient(to right, #0ea5e9, #3b82f6)',
          '-webkit-background-clip': 'text',
          '-moz-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.card-hover-img': {
          'position': 'absolute',
          'object-fit': 'cover',
          'width': '100%',
          'height': '100%',
          'top': '0',
          'left': '0',
          'opacity': '0.9',
          'transition': 'opacity 0.2s ease-out',
        },
        '.card-hover-img:hover': {
          'transition': 'opacity 0.3s ease-in',
          'opacity': '1',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
