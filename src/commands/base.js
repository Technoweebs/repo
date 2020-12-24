module.exports = {
	man: {
		name: "base",										// Command Name
		args: [""],											// Args List
		arch: "[repo] <options>",							// Command Architecture
		function: "Create a repo"							// Documentation
	},
	exec: (args, options) => {
		options = {...{
		}, ...options};
	}
}