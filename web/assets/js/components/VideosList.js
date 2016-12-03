var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');
var Video = require('./Video.js');

var VideosList = React.createClass({
    render: function () {
        return (
            <div className="row text-center">
                {
                    this.props.videos.map(function (video, index) {
                        return (
                            <Video video={video} key={index}/>
                        )
                    })
                }
            </div>
        );
    }
});

module.exports = VideosList;
