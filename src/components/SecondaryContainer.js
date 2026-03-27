import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowplayingMovies);
  const popularMovies = useSelector((store) => store.movies.popularVideos);
  return (
    movies && (
      <div className=" bg-black">
        <div className="-mt-52 pt-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Trending"} movies={movies} />
          <MovieList title={"Popular"} movies={popularMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
