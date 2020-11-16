'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Campaign extends Model {

	owner () {
		return this.hasOne("App/Models/User")
	}

	characters () {
		return this.hasMany("App/Models/Character")
	}
}

module.exports = Campaign
