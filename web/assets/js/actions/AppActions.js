var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	saveVideo: function(video) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SAVE_VIDEO,
			video: video
		});
	}
}

module.exports = AppActions;
