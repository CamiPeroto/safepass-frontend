/** @type {import('tailwindcss').Config} */
import { type Config } from 'tailwindcss';

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}", // caso use pasta src
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}
module.exports = {
  content: ["./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"],
  presets: [require("@relume_io/relume-tailwind")],
};
export default config;