import React from "react";

const AddButton = (props) => {
	return(
		<div>
			<i className="fas fa-plus-circle plusIcon" onClick={()=>props.onRouteChange("form")}></i>
		</div>
	)
}

export default AddButton;
