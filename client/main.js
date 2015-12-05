var entries = [ {
	name: 'Pattaya'
}, {
	name: 'Ko Chang'
}, {
	name: 'Samui'
}, {
	name: 'Bangkok'
}, {
	name: 'Utapao'
}, {
	name: 'Auttay'
}, {
	name: 'BKK SUV'
}, {
	name: 'Siracha'
}, {
	name: 'Ko Kood'
} ];

Template.addEvent.onRendered( function () {
	if ( Places.find().count() == 0 ) {
		_.each( entries, function ( doc ) {
			Places.insert( doc );
		} )
	} else {
		return false;
	}
} );

// result = (function () {
// 	jsonObj = {};
// 	$( ".main-data input, .h input, .h textarea" ).each( function () {
// 		if ( $( this ).val() !== '' ) {
// 			var id = $( this ).attr( "id" );
// 			var value = $( this ).val();
// 			jsonObj[id] = value;
// 		};
// 	})
// 	jsonObj = [jsonObj];
// 	return jsonObj;
// })();

// Template.addTour.events({
// 	'click .conf': function  () {
// 		Tours.insert({
// 			tour: result
// 		})
// 	}
// })
