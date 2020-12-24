module.exports = {
	man: {
		name: "base",										// Arg Name
		arch: "<-b | --base>",								// Arg Architecture
		function: "Does a barrel roll"						// Documentation
	},
	check: (args) => {
		return / (-b|--base) /i.test(' ' + args.join(' ') + ' ');
	},

	exec: (args, options) => {
		args.splice(args.indexOf(args.find((element) => { return element.match(/^(-b|--base)$/i) })), 1);
		options.base = true;
		return { args: args, options: options };
	}
}