'use strict'

const User = use('App/Models/User')

class UserController {

	async store ({ request }) {

		const user = await User.create({
			username: request.input("username"),
			email: request.input("email"),
			password: request.input("password")
		})

		return user
	}
}

module.exports = UserController
