var AppActions = require('../actions/AppActions');

module.exports = {
	saveVideo: function(video) {
		console.log('API Called...');

		$.ajax({
			method: "POST",
			url: "http://localhost/youtubegalleryapi/web/app_dev.php/api/save_video",
			data: video,
			crossDomain: true,
		})
		.done(function( msg ) {
			alert( "Data Saved: " + msg );
		});
	}
}
