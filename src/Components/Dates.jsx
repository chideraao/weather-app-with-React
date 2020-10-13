import React from "react";

function Dates({ weather, timeZone }) {
	const dateBuilder = (d) => {
		let months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		let days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		let day = days[d.getDay()];
		let month = months[d.getMonth()];
		let year = d.getFullYear();
		let date = d.getDate();

		return `${day}, ${date} ${month}, ${year}`;
	};
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
