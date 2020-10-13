import React from "react";

function Search() {
	return (
		<div>
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
		</div>
	);
}

export default Search;
