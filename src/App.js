import Axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Dates from "./Components/Dates";
import Location from "./Components/Location";
import Time from "./Components/Time";
import Weather from "./Components/Weather";

const api = {
	base: "https://api.openweathermap.org/data/2.5/weather?q=",
	key: "39aa931e9188dadb3acc2ee4645d72c5",
	timeKey: "d65e37f4206340d188baba3c12561f09",
	timeBase: "https://api.ipgeolocation.io/timezone?",
};

function App() {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState({});

	const search = (e) => {
		if (e.key === "Enter") {
			//weathermap API call
			Axios.get(`${api.base}${query}&units=metric&APPID=${api.key}`).then(
				(res) => {
					setWeather(res.data);
					setQuery("");

					console.log(weather.weather);
				}
			);
			//geolocation API call
			if (weather.main !== undefined) {
				console.log(weather);
				Axios.get(
					`${api.timeBase}apiKey=${api.timeKey}&tz=${weather.name}, ${weather.sys.country}`
				).then((res) => {
					console.log(res);
				});
			}
		}
	};

	return (
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
				<Location weather={weather} />
				<Dates weather={weather} />
				<Weather weather={weather} />
				<Time />
			</main>
		</div>
	);
}

export default App;
