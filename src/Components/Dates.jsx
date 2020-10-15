import React from "react";

function Dates({ weather, timeZone }) {
	return (
		<div>
			{typeof weather.main !== "undefined" ? (
				<div className="location-box">
					{" "}
					{typeof timeZone.timezone !== "undefined" ? (
						<div className="date">
							{timeZone.date_time_txt} (GMT: {timeZone.timezone_offset}){" "}
						</div>
					) : (
						" "
					)}
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default Dates;
