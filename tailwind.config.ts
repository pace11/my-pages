import type { Config } from 'tailwindcss'
const withMT = require('@material-tailwind/react/utils/withMT')

const config: Config = withMT({
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        linkedin: '#0a66c2',
        instagram: '#E1306C',
      },
    },
  },
  plugins: [],
})

export default config
