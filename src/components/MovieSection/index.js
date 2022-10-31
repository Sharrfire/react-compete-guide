import React, { useState, useEffect, useCallbacks, useCallback } from 'react';
import PropTypes from 'prop-types';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './index.css';
MovieSection.propTypes = {};
const dummyMovies = [
  {
    id: 1,
    title: 'Some Dummy Movie',
    openingText: 'This is the opening text of the movie',
    releaseDate: '2021-05-18',
  },
  {
    id: 2,
    title: 'Some Dummy Movie 2',
    openingText: 'This is the second opening text of the movie',
    releaseDate: '2021-05-19',
  },
];

function MovieSection(props) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchMovie = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      const tranformedMovie = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(tranformedMovie);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(async () => {
    handleFetchMovie();
  }, [handleFetchMovie]);
  let content = <p> </p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Getting movies data</p>;
  }

  return (
    <>
      <section>
        <AddMovie />
      </section>
      <section>
        <button onClick={handleFetchMovie}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Click to fetch movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Getting movies data</p>} */}
        {content}
      </section>
    </>
  );
}

export default MovieSection;
