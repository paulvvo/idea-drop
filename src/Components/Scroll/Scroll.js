import React from "react";

const Scroll = (props) =>{
	return(
		<div style={{
			overflowY:"scroll",
			height:500+"px",
			marginTop: 20 + "px"
		}}>
		{props.children}
		</div>
	)
}
export default Scroll;
