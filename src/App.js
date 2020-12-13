import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Dates from "./Components/Dates";
import Footer from "./Components/Footer";
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
	const apiCall = () => {
		Axios({
			method: "get",
			url: `${api.base}${query}&units=metric&APPID=${api.key}`,
			timeout: 10000, // Let's say you want to wait at least 4 mins
		})
			.then((res) => {
				setWeather(res.data);
				//setQuery("");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		apiCall();
	};
	useEffect(() => {
		const id = setInterval(apiCall, 60000);
		return () => clearInterval(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	useEffect(() => {
		if (weather.main !== undefined) {
			Axios.get(
				`${api.timeBase}apiKey=${api.timeKey}&location=${weather.name}, ${weather.sys.country}`
			)
				.then((res) => {
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
				<Footer />
			</main>
		</div>
	);
}

export default App;
