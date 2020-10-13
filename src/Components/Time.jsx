import React from "react";

function Time({ timeZone }) {
	return (
		<div className="time-box">
			<div className="time"> {timeZone.time_24}</div>
		</div>
	);
}

export default Time;
