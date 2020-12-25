module.exports = {
	name: "base",											// Module Name
	exec: (options) => {
		return new Promise((resolve, reject) => {
			// Do some code
			if(!"blabla") return reject();
			return resolve();
		});
	}
}