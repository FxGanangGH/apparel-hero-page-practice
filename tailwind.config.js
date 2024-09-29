/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          'pale-red': 'hsl(0, 36%, 70%)',
          'soft-red': 'hsl(0, 93%, 68%)'
        },
        secondary: {
          red: 'hsl(0, 6%, 24%)'
        },
        gradient: {
          '1-start': 'hsl(0, 0%, 100%)',
          '1-end': 'hsl(0, 100%, 98%)',
          '2-start': 'hsl(0, 80%, 86%)',
          '2-end': 'hsl(0, 74%, 74%)'
        }
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif']
        // Only use font-light(300), font-base(400), and font-semibold(600)
      },
      backgroundImage: {
        pattern: "url('/images/bg-pattern-desktop.svg')"
      }
    }
  },
  plugins: []
}
