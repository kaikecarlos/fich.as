const source = document.getElementsByTagName("input")
const charId = document.getElementById("characterId").value
window.onload = () => {
	let ws = null

	ws = adonis.Ws().connect()
	const char = ws.subscribe("character:" + charId)

	char.on('ready', () => {
		console.log("pronto")
	})

	char.on('attributeChange', (what) => {
		let input = document.getElementById(what.id)
		input.value = what.what
	})
	const inputHandler = (e) => {
		let whatChanged = {"what": e.target.value, "id": e.target.id}
		char.emit("attributeChange", whatChanged)
		console.log(e.target.id)
		console.log(e.target.value)
	}

	for (i = 0; i < source.length; i++) {
		source[i].addEventListener('input', inputHandler)
	}
}