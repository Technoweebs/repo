const fs = require("fs");

module.exports = {
	load: (app) => {
		this.app = app;
		this.args = new Map();

		fs.readdirSync(__dirname + "/args").forEach((file) => {
			let arg = require(__dirname + "/args/" + file);
			this.args.set(arg.man.name, arg);
		});
	},

	check: (arg) => {
		return this.args.get(arg) != undefined;
	},

	parse: (args, uArgs) => {
		let options = {};
		let nArgs = args;

		uArgs.forEach((arg) => {
			if(!this.check(arg)) return;
			if(!this.args.get(arg).check(nArgs)) return;

			let exec = this.args.get(arg).exec(nArgs);
			
			options = {...options, ...exec.options};
			nArgs = exec.args;
		});

		return { options: options, args: nArgs };
	},

	man: (arg) => {
		return this.check(arg) ? this.args.get(arg).man : null;
	}
};