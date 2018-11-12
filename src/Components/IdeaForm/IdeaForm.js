import React from "react";

const IdeaForm = () =>{
	return(
		<div className="ideaform">


			<main className="pa4 black-80">
				<form className="measure center">
					<fieldset className="ba b--transparent ph0 mh0">
						<legend className="f4 fw6 ph0 mh0">New Idea Drop</legend>
						<div className="mt3">
							<label className="db fw6 lh-copy f6" htmlFor="name">Droplet Name</label>
							<input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="name" />
						</div>
					</fieldset>
						<div>
							<label htmlFor="category" className="f6 b db mb2">Category</label>
							<select id='category' className="ba b--black-20 pa1	mb2 db w-50">
							  <option value="Technology">Technology</option>
							  <option value="Games">Games</option>
							  <option value="Food">Food</option>
							  <option value="Arts and Crafts">Arts and Crafts</option>
							  <option value="Clothing">Clothing</option>
							</select>
						</div>
					  <div>
					    <label htmlFor="pictureurl" className="f6 b db mb2">Picture URL</label>
					    <input id="pictureurl" className="input-reset ba b--black-20 pa1 mb2 db w-100" type="text" aria-describedby="name-desc" autocomplete="off"/>
					    <small id="pictureurl" className="f6 black-60 db mb2">Enter in the URL for the image</small>
					  </div>
					  <div>
					    <label htmlFor="comment" className="f6 b db mb2">Comments <span className="normal black-60">(optional)</span></label>
					    <textarea id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa1 br2 mb2" aria-describedby="comment-desc"></textarea>
					    <small id="comment-desc" className="f6 black-60">Helper text for a form control. Can use this text to <a href="#0" className="link underline black-80 hover-blue">link to more info.</a></small>
					  </div>
						<div className="">
							<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Drop!"/>
						</div>
				</form>
			</main>


		</div>
	)
}

export default IdeaForm;
