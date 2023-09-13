import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        viking: "url('/viking2.png')",
        vikingsm: "url('/viking2_sm.png')",
        vikingmd: "url('/viking2_md.png')"
      })
    },
  },
  plugins: [],
}
export default config
