const fetch = require('node-fetch');
const UserModel = require('../models/user.model');

class UserService{

	constructor(){
		this.url = 'http://www.mocky.io/v2/5c77407d3000000f009d6195';
	}

	async getAll(){
		
		return new Promise((done, fail)=> {
			fetch(this.url)
			    .then(res => res.json())
			    .then(json => done(json))
			    .catch(err => fail(err));
		})

	}

}
module.exports = UserService;