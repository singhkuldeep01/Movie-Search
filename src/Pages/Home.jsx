import React, { useEffect, useState } from 'react';
import SearchBox from '../Components/SearchField/SearchBox';
import { useNavigate } from 'react-router-dom';
import MovieCards from '../Components/MovieCard/MovieCards';


function Home() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('spider man');
  const [loading, setLoading] = useState(false);

  function movieCardClickHandler(movieId){
    navigate(`/Movie/${movieId}`);
  }

  return (
    <div className='flex w-full items-center flex-col pt-28 bg-gray-100 dark:bg-gray-900 min-h-screen pb-24'>
      <h1 className='text-3xl font-semibold mb-10 text-gray-900 dark:text-white'>Movie Search</h1>
      <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} loading={loading} />
      <MovieCards setLoading={setLoading} searchInput={searchInput} result={searchInput} loading={loading} cardClickHandler={movieCardClickHandler} />
    </div>
  );
}

export default Home;