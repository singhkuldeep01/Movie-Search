import React, { useEffect, useState } from 'react';
import SearchBox from '../Components/SearchField/SearchBox';
import { useNavigate } from 'react-router-dom';
import MovieCards from '../Components/MovieCard/MovieCards';


function Home() {
  console.log("home  page");
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('spider man');
  const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchInput)}&apikey=a11863ac`);
  //     const data = await response.json();
  //     const totalResults = parseInt(data.totalResults);
  //     setTotalPages(Math.ceil(totalResults / 10));
  //     if (data.Search) {
  //       setDataList(data.Search);
  //     } else {
  //       setDataList([]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setDataList([]);
  //   }
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [searchInput]);

  function movieCardClickHandler(movieId){
    navigate(`/Movie/${movieId}`);
    console.log('Movie card clicked');
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