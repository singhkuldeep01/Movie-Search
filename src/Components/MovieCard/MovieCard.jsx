import React from 'react';

function MovieCard({ title, year, poster }) {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden w-32 sm:w-36 md:w-48 lg:w-60 m-2 sm:m-4 hover:scale-105 duration-75'>
      <img src={poster} alt={title} className='w-full h-36 sm:h-40 md:h-60 lg:h-80 object-cover object-top' />
      <div className='p-2 sm:p-4'>
        <h2 className='text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2'>{title}</h2>
        <p className='text-gray-700 text-xs sm:text-sm md:text-base'>{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;