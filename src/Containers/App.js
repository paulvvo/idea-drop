import React, { Component } from 'react';

import './App.css';

//Components
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
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
				<Register/>
				<Login/>
				<IdeaPreviewBoxContainer/>
			</div>
    );
  }
}

export default App;
