import React from "react";

function Dates({ weather }) {
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
		<div className="location-box">
			{" "}
			{typeof weather.main !== "undefined" ? (
				<div className="date">{dateBuilder(new Date())}</div>
			) : (
				" "
			)}
		</div>
	);
}

export default Dates;
