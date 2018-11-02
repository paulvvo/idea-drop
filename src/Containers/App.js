import React, { Component } from 'react';
import './App.css';

//Components

import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import NavBar from "../Components/NavBar/NavBar";
import Scroll from "../Components/Scroll/Scroll";
import IdeaForm from "../Components/IdeaForm/IdeaForm";
import HomeLogo from "../Components/HomeLogo/HomeLogo";
import IdeaPreviewBoxContainer from "../Components/IdeaPreviewBoxContainer/IdeaPreviewBoxContainer";

class App extends Component {
	constructor(){
		super();
		this.state ={
			searchInputText:"",
			route:"",
			currentUser:{},

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
					:this.state.route === "register"
					?<Register/>
					:<div>
						<Scroll>
							<IdeaPreviewBoxContainer onImagePreviewBoxClick={this.onImagePreviewBoxClick}/>
						</Scroll>
					</div>
				}
				<NavBar
				route={this.state.route}
				onSearchInputChange={this.onSearchInputChange}
				onNavButtonClick={this.onNavButtonClick}/>


				<HomeLogo onHomeLogoClick={this.onHomeLogoClick}/>
				<IdeaForm/>
			</div>
    );
  }
	onHomeLogoClick = (route) =>{
		this.setState({route});
	}
	onNavButtonClick = (route) =>{
		this.setState({route});
	}
	onImagePreviewBoxClick = () =>{
		console.log("clicked");
	}
	onSearchInputChange =(event) =>{
		this.setState({searchInputText:event.target.value});
	}

}


export default App;
