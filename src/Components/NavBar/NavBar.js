import React, {Component} from "react";


class NavBar extends Component{

	render(){
		return(
			<div className="navbar">
				<input type="text" placeholder="Looking for something '-' ?"/>
				<a href="#0">Login</a>
				<a href="#0">Sign Up</a>
				<a href="#0">Logout</a>
			</div>
		)
	}
}

export default NavBar;
