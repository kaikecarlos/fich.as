'use strict'

class CharacterController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onAttributeChange (what) {
  	console.log(what)
  	this.socket.broadcast('attributeChange', what)
  }
}

module.exports = CharacterController
