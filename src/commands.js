const fs = require("fs");

module.exports = {
	load: (app) => {
		this.app = app;
		this.commands = new Map();

		fs.readdirSync(__dirname + "/commands").forEach((file) => {
			let command = require(__dirname + "/commands/" + file);
			this.commands.set(command.man.name, command);
		});
	},

	check: (command) => {
		return this.commands.get(command) != undefined;
	},

	exec: (command, args) => {
		if(!this.check(command)) return null;
		let pArgs = this.app.get("args").parse(args, this.man(command).args);

		return this.commands.get(command).exec(pArgs.args, pArgs.options);
	},

	man: (command) => {
		return this.check(command) ? this.commands.get(command).man : null;
	}
};