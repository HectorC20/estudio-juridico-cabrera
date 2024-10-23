export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}', '.src/**/**/*.{css}'],
	theme: {
		extend: {
			keyframes: {
				slideDown: {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			animation: {
				slideDown: 'slideDown 1s ease-in-out',  // Aquí va la animación
			},
			colors: {
				primaryLocal: "#F7F9F2",
				secondaryLocal: "#306aab",
				tertiaryLocal: "#10375C",
				fourthLocal: "#E9EFEC",
				fifthLocal: "#021526",
			},
			boxShadow: {
				secondaryLocal: '0 -7px 12px -14px rgba(secondaryLocal)',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ["light"],
		darkTheme: "dark",
		base: true,
		styled: true,
		utils: true,
		prefix: "",
		logs: true,
		themeRoot: ":root",
	}
}
