import React, {Component} from "react";

class Map extends Component {

	shouldComponentUpdate(){
		return false;
	}
	componentDidMount(){
		// this.map = new google.maps.Map(this.refs.map,
		// 	{
    //     center: {
		// 			lat:this.props.lat,
		// 			lng:this.props.lng
		// 		},
    //     zoom: 8
    // 	});
	}
	render(){
		return(
			<div id="map" refs="map"/>
		)
	}
}

export default Map;
