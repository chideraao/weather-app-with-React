import Axios from "axios";
import React, { useState } from "react";
import "./App.css";

const api = {
	base: "https://api.openweathermap.org/data/2.5/weather?q=",
	key: "39aa931e9188dadb3acc2ee4645d72c5",
};

function App() {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState({});

	const search = (e) => {
		if (e.key === "Enter") {
			Axios.get(`${api.base}${query}&units=metric&APPID=${api.key}`).then(
				(res) => {
					setWeather(res.data);
					setQuery("");
					console.log(weather.weather);
					console.log(weather);
					if (weather.main !== undefined) {
						console.log(weather.main.temp);
					}
				}
			);
		}
	};

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
		//check below
		<div
			className={
				typeof weather.main !== "undefined"
					? weather.main.temp > 16
						? "App warm"
						: "App"
					: "App"
			}
		>
			<main>
				<div className="search-box">
					<input
						type="text"
						className="search-bar"
						placeholder="Search..."
						onChange={(e) => setQuery(e.target.value)}
						value={query}
						onKeyPress={search}
					/>
				</div>
				{typeof weather.main !== "undefined" ? (
					<div>
						<div className="location-box">
							<div className="location">
								<p>
									{weather.name}, {weather.sys.country}{" "}
								</p>
							</div>
							<div className="date">{dateBuilder(new Date())}</div>{" "}
						</div>
						<div className="weather-box">
							<div className="temp">{Math.round(weather.main.temp)}°C </div>
							<div className="weather">{weather.weather[0].main}</div>
						</div>
					</div>
				) : (
					""
				)}
			</main>
		</div>
	);
}

export default App;
