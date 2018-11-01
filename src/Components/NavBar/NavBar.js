import React, {Component} from "react";


class NavBar extends Component{

	render(){
			const {onLoginButtonClick, onRegiButtonClick} = this.props;
		return(
			<div className="navbar">
				<input type="text" placeholder="Looking for something '-' ?"/>
				<a href="#0" onClick={()=>onLoginButtonClick("login")}>Login</a>
				<a href="#0" onClick={()=>onRegiButtonClick("register")}>Sign Up</a>
				<a href="#0">Logout</a>
			</div>
		)
	}
}

export default NavBar;
