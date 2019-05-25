/* SUDODUDE - ANDY ZIM  */
let cef = null;
const lPlayer = mp.players.local;

/* CEF START */
function prepCef() {
	mp.gui.cursor.visible = true;
	mp.game.ui.displayRadar(false);
	mp.gui.chat.show(false);
}
exports.prepCef = prepCef;


function injectCef(execute) {
	if(!cef) return;
	cef.execute(execute);
}
exports.injectCef = injectCef;


function openCef(url) {
	if (cef) cef.destroy();
	cef = mp.browsers.new(url);
}
exports.openCef = openCef;


function closeCef(car=false) {
	if (cef) {
		cef.destroy(); 
		cef = null;
	}
	mp.gui.cursor.visible = false;
	mp.game.ui.displayRadar(car);
	mp.gui.chat.show(true);
}
exports.closeCef = closeCef;
/* CEF END */

mp.events.add(
{		
	"cMisc-CloseCef" : () => closeCef(),

	"cMisc-ChangeHeading" : (angle) => lPlayer.setHeading(angle),

	"cMisc-CallServerEvent" : (eventName, arg1) => mp.events.callRemote(eventName, arg1),
	
});
	
mp.events.add({
    "cPedPicker-OpenMenu" : (inject) => {
        prepCef();
        openCef("package://AZAMOEBA/Browsers/PedPicker/index.html");
        injectCef(inject);
    },
});

// /* F7 */
mp.keys.bind(118, true, function() {
    mp.events.callRemote('sKeys-F7');
})