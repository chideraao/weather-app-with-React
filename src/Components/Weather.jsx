import React from "react";

function Weather({ weather }) {
	return (
		<div>
			{typeof weather.main !== "undefined" ? (
				<div>
					<div className="weather-box">
						<div className="temp">{Math.round(weather.main.temp)}°C </div>
						<div className="weather">{weather.weather[0].main}</div>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default Weather;
