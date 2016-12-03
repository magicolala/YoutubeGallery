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
			console.log( "Data Saved " + msg );
		});
	},

    getVideos: function() {
        $.get( "http://localhost/youtubegalleryapi/web/app_dev.php/api/get_videos", function(data) {
            var videos = [];
            console.log(data);
            data.forEach(function(data) {
                var video = {
                    title: data.title,
                    video_id: data.video_id,
                    description: data.description
                }
                videos.push(video);
                AppActions.receiveVideos(videos);
            });
        });
    }
}
