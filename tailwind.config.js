/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				typing: {
					"0%": {
						width: "0%",
						visibility: "hidden",
					},
					"100%": {
						width: "100%",
					},
				},
				blink: {
					"50%": {
						borderColor: "transparent",
					},
					"100%": {
						borderColor: "white",
					},
				},
			},
			animation: {
				typing: "typing 2s steps(20) alternate, blink 1s",
			},
			colors: {
				primary: {
					background: "#CDE8E5",
					nav: "rgba(238, 247, 255, 0.5)",
					card: "#7AB2B2",
					text: "#4D869C",
					active: "#7AB2B2",
				},
			},
			boxShadow: {
				custom:
					"0 4px 6px -1px rgba(152, 255, 152, 0.5), 0 2px 4px -1px rgba(152, 255, 152, 0.3)", // Smooth mint color shadow
			},
		},
	},
	plugins: [],
}
