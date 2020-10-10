import React from "react";

function Time() {
	const timeBuilder = (t) => {
		let time = t.getTime();
		return `${time}`;
	};
	const d = new Date();
	let time = d.toTimeString();
	return <div>{time}</div>;
}

export default Time;
