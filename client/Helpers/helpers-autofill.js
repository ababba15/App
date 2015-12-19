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
