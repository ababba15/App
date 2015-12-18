Meteor.publish('Locations', function () {return Locations.find()});
Meteor.publish('Districts', function () {return Districts.find()});
Meteor.publish('Places', function () {return Places.find()});