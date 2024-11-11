import React from 'react';

function MovieCard({ title, year, poster , cardClickHandler , movieId }) {
  const defaultPoster = 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/fb7fef67-6965-4775-b416-91661baa06d8/dd5be78d-ca35-4c9f-9d09-b09a6f3b2c95.png';

  return (
    <div onClick={()=>{
      cardClickHandler(movieId);
    }} className='bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden w-32 sm:w-32 md:w-40 lg:w-44 m-2 sm:m-3 hover:scale-105 duration-75 cursor-pointer'>
      <div className='relative w-full' style={{ paddingBottom: '150%' }}>
        <img src={poster === 'N/A' ? defaultPoster : poster} alt={title} className='absolute top-0 left-0 w-full h-full object-cover object-top' />
      </div>
      <div className='p-2 sm:p-3'>
        <h2 className='text-xs sm:text-sm md:text-base lg:text-base mb-1 text-gray-900 dark:text-white'>{title}</h2>
        <p className='text-gray-700 dark:text-gray-400 text-xs sm:text-sm md:text-base'>{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;