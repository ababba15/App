Meteor.publish('Places', function () {
	return Places.find()
});

Places.allow({
    'insert': function (userId,doc) {
      return true;
    }
});