import React from "react";

function Location({ weather }) {
	if (weather.main !== undefined) {
		console.log(weather.main.temp);
	}
	return (
		<div>
			{typeof weather.main !== "undefined" ? (
				<div>
					<div className="location-box">
						<div className="location">
							<p>
								{weather.name}, {weather.sys.country}{" "}
							</p>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default Location;
