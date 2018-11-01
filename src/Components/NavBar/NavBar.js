import React, {Component} from "react";


class NavBar extends Component{

	render(){
			const {onNavButtonClick} = this.props;
		return(
			<div className="navbar">
				<input type="text" placeholder="Looking for something '-' ?"/>
				<a href="#0" onClick={()=>onNavButtonClick("login")}>Login</a>
				<a href="#0" onClick={()=>onNavButtonClick("register")}>Sign Up</a>
				<a href="#0" onClick={()=>onNavButtonClick("home")}>Logout</a>
			</div>
		)
	}
}

export default NavBar;
