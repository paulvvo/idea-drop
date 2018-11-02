import React, {Component} from "react";


class NavBar extends Component{

	render(){
		const {onNavButtonClick, onSearchInputChange, route} = this.props;

		if(route === "login" || route ==="register" || route==="form"){
			return(
				<div className="navbar">
					<a href="#0" onClick={()=>onNavButtonClick("login")} draggable="false">Login</a>
					<a href="#0" onClick={()=>onNavButtonClick("register")} draggable="false">Sign Up</a>
					<a href="#0" onClick={()=>onNavButtonClick("home")} draggable="false">Logout</a>
				</div>
			)
		}else{
			return(
				<div className="navbar">
					<input type="text" onChange={onSearchInputChange} placeholder="Looking for something '-' ?" draggable="false"/>
					<a href="#0" onClick={()=>onNavButtonClick("login")} draggable="false">Login</a>
					<a href="#0" onClick={()=>onNavButtonClick("register")} draggable="false">Sign Up</a>
					<a href="#0" onClick={()=>onNavButtonClick("home")} draggable="false">Logout</a>
				</div>
			)
		}

	}
}

export default NavBar;
