import React from "react";

const IdeaForm = () =>{
	return(
		<div className="ideaform">
		<main className="pa4 black-80">
			<form className="measure center">
				<fieldset className="ba b--transparent ph0 mh0">
					<legend className="f4 fw6 ph0 mh0">Sign In</legend>
					<div className="mt3">
						<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
						<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" />
					</div>
					<div className="mv3">
						<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
						<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"/>
					</div>
					<label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
				</fieldset>

				  <div className="measure">
				    <label htmlFor="name" className="f6 b db mb2">Name <span className="normal black-60">(optional)</span></label>
				    <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
				    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
				  </div>

				  <div>
				    <label htmlFor="comment" className="f6 b db mb2">Comments <span className="normal black-60">(optional)</span></label>
				    <textarea id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
				    <small id="comment-desc" className="f6 black-60">Helper text for a form control. Can use this text to <a href="#0" className="link underline black-80 hover-blue">link to more info.</a></small>
				  </div>



				<div className="">
					<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
				</div>

			</form>
		</main>
		</div>
	)
}

export default IdeaForm;
