'use strict'

const Character = use('App/Models/Character')
const Campaign = use('App/Models/Campaign')

class CharacterController {

	async index ({ view, params }) {
		const campaign = await Campaign.find(params.id)
		if (!campaign) return {'erro': 'not found'}
		const allCharacters = await campaign.characters().fetch()
		return view.render('characters/index', {characters: allCharacters.toJSON(), campaign: campaign.toJSON()})
	}

	async show ({ view, params }) {
		const character = await Character.find(params.id)
		if (!character) return {'erro': 'erro'}
		return view.render('characters/show', {character: character.toJSON()})
	}
}

module.exports = CharacterController
