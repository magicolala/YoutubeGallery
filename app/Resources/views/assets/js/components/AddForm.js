var React = require('react');
var AppActions = require('../actions/AppActions.js');

var AddForm = React.createClass({
	render: function(){
		return(
            <div className="add-form row">
                <div className="well col-md-12">
                    <h3>Add Video</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Video Title</label>
                            <input type="text" ref="title" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Video ID</label>
                            <input type="text" ref="video_id" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Video Description</label>
                            <textarea type="text" ref="description" className="form-control"></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">Add</button>
                    </form>
                </div>
            </div>
		);
	},
    onSubmit: function(e) {
        e.preventDefault();

        var video = {
            title: this.refs.title.value.trim(),
            video_id: this.refs.video_id.value.trim(),
            description: this.refs.description.value.trim()
        }

        AppActions.saveVideo(video);
    }
});

module.exports = AddForm;
