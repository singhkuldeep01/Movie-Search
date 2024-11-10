import React from 'react';
import MovieCard from './MovieCard';
import './Spinner.css'; // Import the spinner CSS

function MovieCards({ movies, result, loading }) {
  return (
    <div className='mt-10 flex-col flex px-8 items-center'>
      {movies.length ?  <p className='px-8'>Results: {result}</p> : null}
      <div className='flex flex-wrap justify-center px-2 md:px-4 lg:px-7'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <div className="spinner m-auto mt-24"></div> {/* Custom spinner */}
          </div>
        ) : (
          movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
              />
            ))
          ) : (
            <p className='text-red-600 text-xl font-semibold mt-32'>No movies found !!</p>
          )
        )}
      </div>
    </div>
  );
}

export default MovieCards;