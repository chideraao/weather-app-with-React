import React from "react";

function Footer() {
	return (
		<div className="footer-div">
			<div className="disclaimer-div">
				<p className="footer-p">
					Disclaimer: This project was initially inspired by a Youtube tutorial
					by Tyler Potts. Extra features were later added by myself to the
					project as an extra challenge.
				</p>
				<p className="footer-p">
					PS: Original intention for the site was to make the API call every
					second as a sort of ticking component but a restriction of 1000
					calls/day caused me to revisit the plan. Also, for whomever gets to
					visit this site, bear with me as i had to work with the data made
					available by the API.
				</p>
			</div>
			<div className="copyright">
				<p id="copyright">&copy; chideraao</p>
			</div>
		</div>
	);
}

export default Footer;
