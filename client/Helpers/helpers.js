Meteor.subscribe( 'Places' );

Template.place.helpers({
	places: function () {
		return Places.find();
	}
});

Template.placesDropdown.helpers({
	places: function () {
		return Places.find();
	}
});
