import React, { Component } from 'react';
import './App.css';

//Components
import Login from "../Components/Login/Login";
import IdeaPreviewBoxContainer from "../Components/IdeaPreviewBoxContainer/IdeaPreviewBoxContainer";

class App extends Component {
  render() {
    return (
    	<div>
			<Login/>
				<IdeaPreviewBoxContainer/>
			</div>
    );
  }
}

export default App;
