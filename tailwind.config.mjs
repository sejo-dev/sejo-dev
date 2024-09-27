import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'black': '#161513',
			// 'blue': '#1fb6ff',
			// 'purple': '#b16cea',
			// 'pink': '#f76076',
			// 'gray': '#f0f2f5',
			// 'gray-dark': '#273444',
			// 'gray-light': '#d3dce6',
			// 'white': '#ffff',
			...colors
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
