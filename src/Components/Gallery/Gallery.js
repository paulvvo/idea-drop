import React, {Component} from "react";
import Masonry from 'react-masonry-component';



const style = {
    backgroundColor: 'purple',
		height:"100%",
		isFitWidth: "true" 

};

class Gallery extends Component {
    render() {
        const childElements = this.props.elements.map(function(element, i){
           return (
						 <div className="masonry-item" key={i}>
						 		<img src={element.src} alt="#"/>
								<figcaption className="masonry-item-caption">Image {i}</figcaption>
						 </div>

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
