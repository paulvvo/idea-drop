import React, {Component} from "react";


class NavBar extends Component{

	render(){
		const {onNavButtonClick, onSearchInputChange, route} = this.props;

		if(route === "login" || route ==="register"){
			return(
				<div className="navbar">
					<a href="#0" onClick={()=>onNavButtonClick("login")}>Login</a>
					<a href="#0" onClick={()=>onNavButtonClick("register")}>Sign Up</a>
					<a href="#0" onClick={()=>onNavButtonClick("home")}>Logout</a>
				</div>
			)
		}else{
			return(
				<div className="navbar">
					<input type="text" onChange={onSearchInputChange} placeholder="Looking for something '-' ?"/>
					<a href="#0" onClick={()=>onNavButtonClick("login")}>Login</a>
					<a href="#0" onClick={()=>onNavButtonClick("register")}>Sign Up</a>
					<a href="#0" onClick={()=>onNavButtonClick("home")}>Logout</a>
				</div>
			)
		}

	}
}

export default NavBar;
