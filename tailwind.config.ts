import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config;
