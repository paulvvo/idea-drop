import React from "react";

const HomeLogo = (props) =>{
	return(
		<div className="logo">
			<img src="drop.png" alt="logo" onClick={() => props.onHomeLogoClick("home")} draggable="false"/>
		</div>
	)
}
export default HomeLogo;
