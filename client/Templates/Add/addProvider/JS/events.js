Template.newProvider.onCreated(function () {
	this.locVar = new ReactiveVar();
	this.distVar = new ReactiveVar();
})

Template.newProvider.events({
	'change #locationProv': function (event, template) {
		Template.instance().locVar.set($('#locationProv').val())
	},
	'change #districtProv': function (event, template) {
		Template.instance().distVar.set($('#districtProv').val())
	},
	'click .scrollable': function (event, template) {
		$('.selectpicker').selectpicker('refresh');
	}
})

