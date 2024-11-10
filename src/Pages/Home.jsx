import React, { useEffect, useState } from 'react'
import SearchBox from '../Components/SearchField/SearchBox'
import MovieCards from '../Components/MovieCard/MovieCards';


function Home() {
    const [searchInput ,setSearchInput] = useState('spider man');
    const [dataList , setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchInput)}&apikey=a11863ac`);
        const data = await response.json();
        if (data.Search) {
          setDataList(data.Search);
        } else {
          setDataList([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setDataList([]);
      }
      setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[searchInput])
  return (
    <div className='flex w-full justify-center items-center mt-8 flex-col pt-24'>
        <h1 className='text-3xl font-semibold mb-10'>Movie Search</h1>
        <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} loading = {loading} ></SearchBox>
        <MovieCards movies={dataList} result={searchInput} loading={loading}></MovieCards>
    </div>
  )
}

export default Home