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
				primaryLocal: "#f9f6e7",
				secondaryLocal: "#132740",
				tertiaryLocal: "#1b2336",
				fourthLocal: "#c79e69",
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
