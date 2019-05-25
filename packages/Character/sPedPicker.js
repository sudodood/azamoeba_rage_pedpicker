/* SUDODUDE - ANDY ZIM  */

/* 
 * PEDPICKER CLASS TO CHOOSE PED MODEL FOR PLAYER
 * STRIPPED AND SIMPLIFIED VERSION OF PED PICKER
 * USUALLY UPDATEPEDMODEL WILL UPDATE MY DB WITH NEW USER MODEL PROPERTIES
 * THIS WILL ONLY CHANGE FOR SERVER PERSISTENCE
 */
class PedPicker {
	
	contstructor() {

	}

	testPedModel(player, name, hash) {

		player.model = mp.joaat(name);
	}

	async updatePedModel(player, name, hash){

		player.model = mp.joaat(name);
	}
}


const pedPicker = new PedPicker();
module.exports = pedPicker;

/* 
 * PEDPICKER HAS EVENTS
 * sKeys-F7 
 * 		- CLIENT => SERVER OPEN CPEDPICKER MENU => CLIETN
 * sPedPicker-TestPedModel
 * 		- STRIPPED & SIMPLIFIED IMPLEMENTATION FROM MY SERVER FOR TESTING
 * sPedPicker-UsePedModel
 * 		- STRIPPED & SIMPLIFIED IMPLEMENTATION FROM MY SERVER FOR USING
 */

mp.events.add(
{
	'sKeys-F7' : (player) => {
		let execute = "";
	    execute += `app.playerModel = ${player.model}`;
	    player.call('cPedPicker-OpenMenu', [execute]);
	},

	'sPedPicker-TestPedModel' : (player, str) => {
        if (!player.loggedIn) return;
        const d = JSON.parse(str);

		pedPicker.testPedModel(player, d.name, d.hash);
    },

    'sPedPicker-UsePedModel' : (player, str) => {
        if (!player.loggedIn) return;
        const d = JSON.parse(str);

		pedPicker.updatePedModel(player, d.name, d.hash);
    },
	
});