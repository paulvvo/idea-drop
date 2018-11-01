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
			route:"",

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
				<NavBar onNavButtonClick={this.onNavButtonClick}/>
			</div>
    );
  }
	onNavButtonClick = (route) =>{
		// console.log(route);
		this.setState({route});
	}
	onImagePreviewBoxClick = () =>{
		console.log("clicked");
	}

}


export default App;
