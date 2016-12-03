var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _videos = [];

var AppStore = assign({}, EventEmitter.prototype, {
	saveVideo: function(video) {
		_videos.push(video);
	},
	getVideos: function() {
		return _videos;
	},
	setVideos: function(videos) {
		_videos = videos;
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){
		case AppConstants.SAVE_VIDEO:
			console.log('Saving video...');

			// Store Save
			AppStore.saveVideo(action.video);

			// API Save
			AppAPI.saveVideo(action.video);

			// Emit change
			AppStore.emit(CHANGE_EVENT);

		case AppConstants.RECEIVE_VIDEOS:
			console.log('Receiving videos...');

			// Set Videos
			AppStore.setVideos(action.videos);

			// Emit change
			AppStore.emit(CHANGE_EVENT);
	}

	return true;
});

module.exports = AppStore;
