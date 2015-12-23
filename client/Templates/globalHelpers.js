var helpers = {
	locations: function () {
		return _.uniq(Locations.find({}, {
			fields: {
				location: true
			}
		}).map(function (it) {
			return it.location;
		}), false);
	},

	districts: function () {

		if (Template.instance() && Template.instance().locVar) {
			var loc = Template.instance().locVar.get();
		}

		var districtsArr = _.uniq(Locations.find({
			location: {
				$in: loc
			}
		}, {
			fields: {
				district: true
			}
		}).fetch().map(function (it) {
			return it.district;
		}), false);
		return districtsArr;
	},

	places: function () {
		var placesArr = [];
		if (Template.instance() && Template.instance().distVar) {
			var dist = Template.instance().distVar.get();
			placesArr = Locations.find({
				district: {
					$in: dist
				}
			}, {
				fields: {
					place: true
				}
			}).fetch();
		}
		return placesArr;
	},
};

_.each(helpers, function (value, key) {
	Template.registerHelper(key, value);
});
