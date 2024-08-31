/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        SkillSpin: {
          "0%": { background_position: "0% 50%" },
          "50%": { background_position: "100% 50%" },
          "100%": { background_position: "0% 50%" },
          // "to": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        'SkillSpin': 'SkillSpin 3s linear infinite',
      }
    }
  },
  plugins: []
};