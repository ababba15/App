Template.newLocation.events({
	'submit form': function (event) {
		event.preventDefault();
		event.stopPropagation();
		var l = event.target.newLocation.value,
			d = event.target.newDistrict.value,
			a = event.target.toCenter.value,
			p = event.target.newPlace.value,
			k = event.target.kind.value,
			crAt = new Date().valueOf(),
			usr = Meteor.user();

		if (l.length == 0) {
			l = undefined;
		};

		if (d.length == 0) {
			d = undefined;
		};

		a = parseInt(a);
		if (isNaN(a)) {
			a = undefined;
		};

		if (p.length == 0) {
			p = undefined;
		};

		Locations.insert({
			location: l,
			district: d,
			place: p,
			to_center: a,
			kind: k,
			createdAt: crAt,
			user: usr
		});
	}
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

Template.registerHelper('Locations', function () {
	var loc = ReVar.get();
	return Locations.findOne({
		_id: loc
	})
});
