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
	}
};