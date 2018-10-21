// import hello from './modules/hello.js'


const bulb = {}
const bulbElement = document.getElementById('bulb')

bulbElement.addEventListener('load', function() {
	bulb.glass = this.contentDocument.getElementById('test-color')
})

const button = document.getElementById('switch')
button.addEventListener('click', toogleBulb)

function toogleBulb() {
	console.log('Toogle Bulb')
	// bulb.glass.remove();
	bulb.glass.setAttribute('stop-color', 'red')
}
