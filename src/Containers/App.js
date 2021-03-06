import React, { Component } from 'react';
import './App.css';

//Components

import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import NavBar from "../Components/NavBar/NavBar";
import Scroll from "../Components/Scroll/Scroll";
import IdeaForm from "../Components/IdeaForm/IdeaForm";
import HomeLogo from "../Components/HomeLogo/HomeLogo";
import AddButton from "../Components/AddButton/AddButton";
import IdeaPreviewBoxContainer from "../Components/IdeaPreviewBoxContainer/IdeaPreviewBoxContainer";

class App extends Component {
	constructor(){
		super();
		this.state ={
			searchInputText:"",
			route:"form",
			currentUser:{},

		}
	}

	componentDidMount(){
		fetch("http://localhost:3001")
		.then(response => response.json())
		.then(console.log);
	}
  render() {
    return (

				<div>

				{
					this.state.route === "login"
					?<Login/>
					:this.state.route === "register"
					?<Register/>
					:this.state.route === "form"
					?<Scroll><IdeaForm/></Scroll>
					:<div>
						<AddButton onRouteChange={this.onRouteChange}/>
						<Scroll style={{
							backgroundColor:"blue"
						}}>
							<IdeaPreviewBoxContainer onImagePreviewBoxClick={this.onImagePreviewBoxClick}/>
						</Scroll>
					</div>
				}


				<NavBar
				route={this.state.route}
				onSearchInputChange={this.onSearchInputChange}
				onRouteChange={this.onRouteChange}/>

				<HomeLogo onRouteChange={this.onRouteChange}/>
			</div>
    );
  }
	onRouteChange = (route) =>{
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
