/* SUDODUDE - ANDY ZIM  */
Vue.component('modal', {
  template: '#modal-template'
})

const app = new Vue({
	el: '#ped-picker-app',
	data: {
		playerModel: false,
		camRotation: 0,
		closeButtonText: "CLOSE",
    	selectedParentItem: 'Choose A Model ',
    	testModelText: "Test Model",
		chooseModelText: "Choose Model",
    	searchPedsText: 'Search Peds',
    	useSelectedPedText: 'Use: ',
    	selectedPed: false,
		hideText: true,
		childItems: peds,
    	parentItems: charClasses,
    	showParentsChildrenInfo: true,
	},
	methods: {
		exit: function() {
			mp.trigger("cMisc-CloseCef");
		},
		changeCamRotation: function() {
			mp.trigger("cMisc-ChangeHeading", this.camRotation); 
		},
		close: function() {
			this.exit();
		},
		testPedModel: function(pedName, pedHash) {
			const obj = { name: pedName, hash: pedHash };
			this.selectedPed = obj;
			mp.trigger("cMisc-CallServerEvent", "sPedPicker-TestPedModel", JSON.stringify(obj));
		},
		choosePedModel: function(pedName, pedHash) {
			const obj = { name: pedName, hash: pedHash };
			this.exit();
			mp.trigger("cMisc-CallServerEvent", "sPedPicker-UsePedModel", JSON.stringify(obj));
		},
		filterPeds: function(){
			var input, filter, ul, li, p, i;
			input = document.getElementById("ped-search-input");
			filter = input.value.toUpperCase();
			div = document.getElementById("d-content-data");
			p = div.getElementsByTagName("p");
			for (i = 0; i < p.length; i++) {
				txtValue = p[i].textContent || p[i].innerText;
				if (txtValue.toUpperCase().indexOf(filter) > -1) {
				  p[i].style.display = "";
				} else {
				  p[i].style.display = "none";
				}
			}
		},
	},
	mounted() {

	},
	created() {

	},
});

