Locations = new Meteor.Collection('locations');

Locations.allow( {
	insert: function(){return true},
	update: function(){return true},
	remove: function(){return true}
});

Providers = new Meteor.Collection('providers');

Providers.allow( {
	insert: function(){return true},
	update: function(){return true},
	remove: function(){return true}
});
