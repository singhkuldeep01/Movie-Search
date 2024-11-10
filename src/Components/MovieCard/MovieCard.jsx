import React from 'react'

function MovieCard({title,year, poster}) {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden md:w-64 w-40 m-4 hover:scale-105 duration-75'>
      <img src={poster} alt={title} className='w-full h-44 md:h-80 object-cover' />
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <p className='text-gray-700'>{year}</p>
      </div>
    </div>
  )
}

export default MovieCard