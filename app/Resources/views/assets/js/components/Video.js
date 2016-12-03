var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var Video = React.createClass({
    render: function(){
        var link = 'http://www.youtube.com/embed/' + this.props.video.video_id + '';
        return(
            <div className="col-md-4">
                <h3>{this.props.video.title}</h3>
                <iframe width="360" height="285" src={link} frameBorder="0" allowFullScreen></iframe>
                <p>{this.props.video.description}</p>
            </div>
        );
    }
});

module.exports = Video;
