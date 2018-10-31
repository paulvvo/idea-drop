import React from "react";

const Scroll = (props) =>{
	return(
		<div className="scrollContainer" style={{

		}}>
			<div className="scroll">
				{props.children}
			</div>

		</div>
	)
}
export default Scroll;

// overflowY:"scroll",
// height:400+"px",
// marginTop: 35 + "px"
