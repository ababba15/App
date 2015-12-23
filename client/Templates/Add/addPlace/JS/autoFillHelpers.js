Template.newLocation.rendered = function () {
	Meteor.typeahead.inject();
};

Template.ShowPlaces.rendered = function () {
	i18n.setLanguage('ru');
};

