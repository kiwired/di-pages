import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			animation: {
				'ping-btn': 'ping-btn 1.5s 1s cubic-bezier(0, 0, 0.2, 1) infinite',
			},
			keyframes: {
				'ping-btn': {
					'75%, 100%': { transform: 'scale(1.2)', opacity: '0' },
				},
			},
		},
	},
	plugins: [],
}
export default config
