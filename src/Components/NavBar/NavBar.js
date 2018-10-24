import React, {Component} from "react";


class NavBar extends Component{

	render(){
		return(
			<div className="navbar">
				<input type="text" placeholder="Looking for something '-' ?"/>
				<a href="#">Login</a>
				<a href="#">Sign Up</a>
				<a href="#">Logout</a>
			</div>
		)
	}
}

export default NavBar;
