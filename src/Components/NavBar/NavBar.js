import React, {Component} from "react";


class NavBar extends Component{

	render(){
		const {onRouteChange, onSearchInputChange, route} = this.props;

		if(route === "login" || route ==="register" || route==="form"){
			return(
				<div className="navbar">
					<a href="#0" onClick={()=>onRouteChange("login")} draggable="false">Login</a>
					<a href="#0" onClick={()=>onRouteChange("register")} draggable="false">Sign Up</a>
					<a href="#0" onClick={()=>onRouteChange("home")} draggable="false">Logout</a>
				</div>
			)
		}else{
			return(
				<div className="navbar">
					<input type="text" onChange={onSearchInputChange} placeholder="Looking for something '-' ?" draggable="false"/>
					<a href="#0" onClick={()=>onRouteChange("login")} draggable="false">Login</a>
					<a href="#0" onClick={()=>onRouteChange("register")} draggable="false">Sign Up</a>
					<a href="#0" onClick={()=>onRouteChange("home")} draggable="false">Logout</a>
				</div>
			)
		}

	}
}

export default NavBar;
