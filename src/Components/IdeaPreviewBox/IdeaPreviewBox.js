import React, {Component} from "react";

class IdeaPreviewBox extends Component{
	render(){
		return(
			<div>
				<img
				className="IdeaPreviewImage"
				src= {this.props.url}
				alt="games"
				draggable="false"
				onClick={this.props.onImagePreviewBoxClick}/>
			</div>
		)
	}
}

export default IdeaPreviewBox;
