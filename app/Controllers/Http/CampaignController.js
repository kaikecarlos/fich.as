'use strict'

const Campaign = use('App/Models/Campaign')
const User = use('App/Models/User')

class CampaignController {

	async index ({ view }) {
		// TODO: Parar de usar o user
		console.log("aaa")
		const user = await User.find(3)
		if (!user) { return "nada" }
		const userCampaigns = await user.campaigns().fetch()
		console.log(userCampaigns.toJSON())
		return view.render('campaigns', {campaigns: userCampaigns.toJSON()})
	}
}

module.exports = CampaignController
