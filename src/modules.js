const fs = require("fs");

module.exports = {
	load: (app) => {
		this.app = app;
		this.modules = new Map();

		fs.readdirSync(__dirname + "/modules").forEach((file) => {
			let module = require(__dirname + "/modules/" + file);
			this.modules.set(module.name, arg);
		});
	},

	check: (module) => {
		return this.modules.get(module) != undefined;
	},

	exec: (module, options) => {
		return this.check(module) ? this.modules.get(module).exec(options) : null;
	}
};