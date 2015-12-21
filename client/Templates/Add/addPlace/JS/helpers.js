Template.registerHelper('Locations', function () {
	var loc = ReVar.get();
	return Locations.findOne({
		_id: loc
	})
});
