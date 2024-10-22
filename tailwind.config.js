/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	darkMode: "class",
	theme: {
		screens: {
			xl: { max: "1439.99px" },
			lg: { max: "1260.99px" },
			md: { max: "991.99px" },
			sm: { max: "576.99px" },
			xs: { max: "479.99px" },
		},
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				sofiaSans: ["Sofia Sans", "sans-serif"],
				ptSerif: ["PT Serif", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				primary: "#152B48",
				"primary-hovered": "#0B1D36",
				secondary: "#EE6C4D",
				"secondary-hovered": "#EA580C",
			},
			keyframes: {
				"fade-in": {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				fadeIn: "fade-in .3s ease",
			},
		},
	},
	// plugins: [require('@tailwindcss/forms')],
};
