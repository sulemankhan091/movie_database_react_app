import React from "react";

// configurations
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";

// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image for "not found"
import NoImage from "../images/no_image.jpg";

const Home = () => {
	// desturcturing props
	const { state, loading, error, searchTerm, setSearchTerm } =
		useHomeFetch();

	console.log(state);

	return (
		<>
			{!searchTerm && state.results[0] ? (
				<HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
					title={state.results[0].original_title}
					text={state.results[0].overview}
				/>
			) : null}
			<SearchBar setSearchTerm={setSearchTerm} />
			<Grid
				header={searchTerm ? "Search Result" : "Popular Movies"}
			>
				{state.results.map((movie) => (
					<Thumb
						key={movie.id}
						clickable // it means clickable = {true}
						image={
							movie.poster_path
								? IMAGE_BASE_URL +
								  POSTER_SIZE +
								  movie.poster_path
								: NoImage
						}
						movieid={movie.id}
					/>
				))}
			</Grid>
			<Spinner />
		</>
	);
};

export default Home;
