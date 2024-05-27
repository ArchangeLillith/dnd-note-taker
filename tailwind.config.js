//Shows tailwind where the files that the styling is going to be in. Here we have the client folder because there's not styling on the backend, and the wildcards show how deep it should look. We then add the file extensions so it only looks into those extensions for styling purposes.
module.exports = {
	content: ["./src/client/**/*.{js,ts,jsx,tsx}"],
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["night"],
	},
};
