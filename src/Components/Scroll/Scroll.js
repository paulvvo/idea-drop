import React from "react";

const Scroll = (props) =>{
	return(
			<div className="scroll">
				{props.children}
			</div>
	)
}
export default Scroll;

// overflowY:"scroll",
// height:400+"px",
// marginTop: 35 + "px"
