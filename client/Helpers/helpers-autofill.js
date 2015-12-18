Template.newLocation.helpers( {
	locations: function () {
		return Locations.find().fetch().map( function ( it ) {
			return it.location;
		} )
	}
} );
Template.newLocation.helpers( {
	districts: function () {
		return Locations.find().fetch().map( function ( it ) {
			return it.district;
		} )
	}
} );
Template.newLocation.helpers( {
	places: function () {
		return Locations.find().fetch().map( function ( it ) {
			return it.place;
		} )
	}
} );

