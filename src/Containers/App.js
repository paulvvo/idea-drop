import React, { Component } from 'react';
import './App.css';

//Components

import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import NavBar from "../Components/NavBar/NavBar";
import Scroll from "../Components/Scroll/Scroll";
import IdeaPreviewBoxContainer from "../Components/IdeaPreviewBoxContainer/IdeaPreviewBoxContainer";

class App extends Component {
	constructor(){
		super();
		this.state ={
			searchInputText:"",


		}
	}
	componentDidMount(){

	}
  render() {
    return (
    	<div>
				<NavBar/>
				<Scroll>
					<IdeaPreviewBoxContainer onImagePreviewBoxClick={this.onImagePreviewBoxClick}/>
				</Scroll>
			</div>
    );
  }

	onImagePreviewBoxClick = () =>{
		console.log("clicked");
	}
}

export default App;


// <Register/>
// <Login/>
