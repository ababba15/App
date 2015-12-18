Template.newLocation.rendered = function () {
	Meteor.typeahead.inject();
};

Template.LocDialog.rendered = function () {
	Meteor.typeahead.inject();
};

Template.Show.rendered = function () {
	i18n.setLanguage('ru');
};

