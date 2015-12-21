Template.newLocation.rendered = function () {
	Meteor.typeahead.inject();
};

Template.LocDialog.rendered = function () {
	Meteor.typeahead.inject();
};

Template.ShowPlaces.rendered = function () {
	i18n.setLanguage('ru');
};

Template.newLocation.helpers({
	locations: function () {
		return Locations.find().fetch().map(function (it) {
			return it.location;
		})
	},

	districts: function () {
		return Locations.find().fetch().map(function (it) {
			return it.district;
		})
	},

	places: function () {
		return Locations.find().fetch().map(function (it) {
			return it.place;
		})
	}
});

