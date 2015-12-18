Locations = new Meteor.Collection( 'locations' );
Districts = new Mongo.Collection( 'districts' );
Places = new Mongo.Collection( 'places' );

Locations.allow( {
	insert: function(){return true},
	update: function(){return true},
	remove: function(){return true}
});

Districts.allow( {
	insert: function(){return true},
	update: function(){return true},
	remove: function(){return true}
} );

Places.allow( {
	insert: function(){return true},
	update: function(){return true},
	remove: function(){return true}
} );
