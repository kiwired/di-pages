import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				pink: {
					DEFAULT: '#F93073',
				},
			},
			animation: {
				'ping-btn': 'ping-btn 1.5s 1s cubic-bezier(0, 0, 0.2, 1) infinite',
				'btn-pulse': 'btn-pulse 2s infinite',
			},
			keyframes: {
				'ping-btn': {
					'75%, 100%': { transform: 'scale(1.2)', opacity: '0' },
				},
				'btn-pulse': {
					'0%': { 'box-shadow': '0 0 0 0 rgba(124, 150, 184, 0.6)' },
					'100%': { 'box-shadow': '0 0 4px 15px rgba(124, 150, 184, 0)' },
				},
			},
		},
	},
	plugins: [],
}
export default config
