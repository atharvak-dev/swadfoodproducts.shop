/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffbf0',
          100: '#fff4cc',
          200: '#ffe699',
          300: '#ffd666',
          400: '#ffc107', // Brand Main (Warning/Amber)
          500: '#b45309', // Main Text/Icon (Dark Amber) - WCAG AA compliant on light
          600: '#92400e',
          700: '#78350f',
          800: '#451a03',
          900: '#78350f',
        },
        secondary: {
          50: '#fcfaf9',
          100: '#efebe9',
          200: '#d7ccc8',
          300: '#bcaaa4',
          800: '#4e342e', // Deep Warm Brown
          900: '#3e2723', // Darkest Brown
        },
        surface: {
          50: '#FFF8F0', // Clotted Cream
          100: '#F5E6D3', // Beige
        },
        // Semantic aliases
        brand: '#ffc107',
        action: '#b45309',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(180, 83, 9, 0.15)',
        'float': '0 8px 30px rgba(0,0,0,0.08)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}