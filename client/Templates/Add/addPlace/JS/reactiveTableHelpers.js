Template.ShowPlaces.helpers({
	settings: function () {
		return {
			collection: Locations,
			rowsPerPage: 100,
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
				key: 'to_center',
				label: 'Расстояние от центра'
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

		}
	}

	rd = ReactiveModal.initDialog(shareDialogInfo);
	rd.buttons.ok.on('click', function (button) {
		var X = ReVar.get(),
			newModalLocation = $(rd.modalTarget).find('[name=newModalLocation]').val(),
			newModalDistrict = $(rd.modalTarget).find('[name=newModalDistrict]').val(),
			newModalPlace = $(rd.modalTarget).find('[name=newModalPlace]').val(),
			toCenterModal = $(rd.modalTarget).find('[name=toCentertModal]').val(),
			kindModal = $(rd.modalTarget).find('[name=kindModal]:checked').val();
		Locations.update({
			_id: X
		}, {
			$set: {
				location: newModalLocation,
				district: newModalDistrict,
				place: newModalPlace,
				to_center: toCenterModal,
				kind: kindModal
			}
		})
	});

});