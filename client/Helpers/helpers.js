Meteor.subscribe('Locations');

Template.newLocation.events({
	'submit form': function (event) {
		event.preventDefault();
		event.stopPropagation();
		var l = event.target.newLocation.value,
			d = event.target.newDistrict.value,
			p = event.target.newPlace.value,
			k = event.target.kind.value;

		if (l.length == 0) {
			l = undefined;
		};
		if (d.length == 0) {
			d = undefined;
		};
		if (p.length == 0) {
			p = undefined;
		};

		Locations.insert({
			location: l,
			district: d,
			place: p,
			kind: k
		});
	}
});

Template.Show.helpers({
	settings: function () {
		return {
			collection: Locations,
			rowsPerPage: 10,
			showFilter: true,
			fields: [{
				key: 'location',
				label: 'Локация'
			}, {
				key: 'district',
				label: 'Район'
			}, {
				key: 'place',
				label: 'Место'
			}, {
				key: 'kind',
				label: 'Тип места'
			}, {
				key: 'delete',
				label: 'Удалить',
				fn: function () {
					return new Spacebars.SafeString('<a class="delete">Удалить</a>')

				}
			}]

		}
	}
});

Meteor.startup(function () {
	var shareDialogInfo = {
		template: Template.LocDialog,
		title: "Изменить запись",
		modalDialogClass: "modal-dialog", //optional
		modalBodyClass: "modal-body", //optional
		modalFooterClass: "modal-footer", //optional
		removeOnHide: false, //optional. If this is true, modal will be removed from DOM upon hiding
		buttons: {
			"cancel": {
				class: 'btn-danger',
				label: 'Cancel'
			},
			"ok": {
				closeModalOnClick: true, // if this is false, dialog doesnt close automatically on click
				class: 'btn-info',
				label: 'Ok'
			}

		},
		doc: { // Provide data context for Template.appShareDialog
			app: "My Application"
		}
	}

	rd = ReactiveModal.initDialog(shareDialogInfo);
	rd.buttons.ok.on('click', function (button) {
		var X = ReVar.get(),
			lm = $(rd.modalTarget).find('[name=newModalLocation]').val(),
			dm = $(rd.modalTarget).find('[name=newModalDistrict]').val(),
			pm = $(rd.modalTarget).find('[name=newModalPlace]').val(),
			km = $(rd.modalTarget).find('[name=kindModal]:checked').val();
		Locations.update({
			_id: X
		}, {
			$set: {
				location: lm,
				district: dm,
				place: pm,
				kind: km
			}
		})
	});

});

ReVar = new ReactiveVar();

Template.layout.events({

	'click .reactive-table tbody tr': function (event) {
		event.preventDefault();
		if (event.target.className == "delete") {
			var loc = this;
			Locations.remove(loc._id)
		}
	},

	'dblclick .reactive-table tbody tr': function (event) {
		event.preventDefault();
		ReVar.set(this._id);
		rd.show();
	}
});

Template.registerHelper('Locations',
	function () {
		var X = ReVar.get();
		return Locations.findOne({
			_id: X
		})
	});
