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
			route:"lgin",



		}
	}
	componentDidMount(){

	}
  render() {
    return (
    	<div>
				{
					this.state.route === "login"
					?<Login/>
					:<Register/>


				}

				<NavBar
				onLoginButtonClick={this.onLoginButtonClick}
				onRegiButtonClick={this.onRegiButtonClick}/>


			</div>
    );
  }
	onLoginButtonClick = (route) =>{
		console.log(route);
		this.setState({route})
	}
	onRegiButtonClick = (route) =>{
		console.log(route);
		this.setState({route})
	}
	onImagePreviewBoxClick = () =>{
		console.log("clicked");
	}

}

// <Scroll>
// 	<IdeaPreviewBoxContainer onImagePreviewBoxClick={this.onImagePreviewBoxClick}/>
// </Scroll>

export default App;
