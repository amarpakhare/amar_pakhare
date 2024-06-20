/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					background: "#CDE8E5",
					nav: "#EEF7FF",
					card: "#7AB2B2",
					active: "#4D869C",
					text: "#7AB2B2",
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
