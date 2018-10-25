import React, { Component } from 'react';
import "masonry-layout";
import './App.css';

//Components
import Map from "../Components/Map/Map";
// import Login from "../Components/Login/Login";
// import Register from "../Components/Register/Register";
import NavBar from "../Components/NavBar/NavBar";
import IdeaPreviewBoxContainer from "../Components/IdeaPreviewBoxContainer/IdeaPreviewBoxContainer";

class App extends Component {
	constructor(){
		super();
		this.state ={

		}
	}
	componentDidMount(){

	}
  render() {
    return (
    	<div>
				<NavBar/>
				<Map lat={-34.397} lng={150.644}/>
				<IdeaPreviewBoxContainer/>
			</div>
    );
  }
}

export default App;


// <Register/>
// <Login/>
