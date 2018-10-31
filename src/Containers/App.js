import React, { Component } from 'react';
import './App.css';

//Components

import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import NavBar from "../Components/NavBar/NavBar";
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
				<IdeaPreviewBoxContainer/>


			</div>
    );
  }
}

export default App;


// <Register/>
// <Login/>
