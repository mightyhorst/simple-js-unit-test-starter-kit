const UserController = require('./ctrls/user.ctrl');
const ctrl = new UserController();


ctrl.getAll()
	.then(users => {
		console.log(users)
	})
	.catch(err => {
		console.error(users)
	});
