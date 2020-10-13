import React from "react";

function Search({ handleChange, query, search, handleSubmit }) {
	return (
		<div>
			<div className="search-box">
				<form action="submit" onSubmit={handleSubmit}>
					<input
						type="text"
						className="search-bar"
						placeholder="Search City..."
						onChange={handleChange}
						value={query}
						onKeyPress={search}
					/>
				</form>
			</div>
		</div>
	);
}

export default Search;
