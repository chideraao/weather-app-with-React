import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Dates from "./Components/Dates";
import Location from "./Components/Location";
import Search from "./Components/Search";
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
	const [timeZone, setTimeZone] = useState({});

	const handleChange = (e) => {
		setQuery(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		const apiCall = () => {
			Axios.get(`${api.base}${query}&units=metric&APPID=${api.key}`)
				.then((res) => {
					console.log(res);
					setWeather(res.data);
					setQuery("");
				})
				.catch((err) => {
					console.log(err);
				});
		};
		setInterval(apiCall, 60000);
	};

	useEffect(() => {
		if (weather.main !== undefined) {
			Axios.get(
				`${api.timeBase}apiKey=${api.timeKey}&location=${weather.name}, ${weather.sys.country}`
			)
				.then((res) => {
					console.log(res.data);
					setTimeZone(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [weather]);

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
				<Search
					handleChange={handleChange}
					query={query}
					handleSubmit={handleSubmit}
				/>

				<Time timeZone={timeZone} />
				<Dates weather={weather} timeZone={timeZone} />
				<Location weather={weather} />

				<Weather weather={weather} />
			</main>
		</div>
	);
}

export default App;
