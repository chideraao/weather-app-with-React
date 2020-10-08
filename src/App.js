import React from "react";
import "./App.css";

const api = {
	base: "",
	key: "",
};

function App() {
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
	};

	return (
		<div className="App">
			<main>
				<div className="search-box">
					<input type="text" className="search-bar" placeholder="Search..." />
				</div>
				<div className="location-box">
					<div className="location">
						<p> Lagos, Nigeria</p>
					</div>
					<div className="date">{dateBuilder(new Date())}</div>{" "}
				</div>
			</main>
		</div>
	);
}

export default App;
