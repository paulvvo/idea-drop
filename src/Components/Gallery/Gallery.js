import React, {Component} from "react";
import Masonry from 'react-masonry-component';



const style = {
    backgroundColor: 'steelblue',
		border:"1px solid black",
		display: "flex",
		justifyContent:"center"

};

class Gallery extends Component {
    render() {
        const childElements = this.props.elements.map(function(element, i){
           return (
						 <figure key={i}>
						 		<img className="masonry-item" src={element.src} alt="#"/>
								<figcaption>Image {i}</figcaption>
						 </figure>

          	);
        });

        return (
            <Masonry
                className={'my-gallery-class'} // default ''
								style={style}
            >
                {childElements}
            </Masonry>
        );
    }

		onImageClick = (event) =>{
			console.log("event.target.value");
		}
}



export default Gallery;
// const masonryOptions = {
//     transitionDuration: 0
// };
//
// const imagesLoadedOptions = { background: '.my-bg-image-el' }

// elementType={'div'} // default 'div'
// options={masonryOptions} // default {}
// disableImagesLoaded={false} // default false
// updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
// imagesLoadedOptions={imagesLoadedOptions} // default {}
