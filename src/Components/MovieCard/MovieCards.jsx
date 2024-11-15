import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './Spinner.css';

function MovieCards({ searchInput, cardClickHandler, setLoading, loading }) {
  const [movies, setMovies] = useState([]);
  const [result, setResult] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchInput)}&page=${page}&apikey=a11863ac`);
      const data = await response.json();
      setMovies(data.Search || []);
      setResult(data.totalResults || 0);
      setTotalPages(Math.ceil((data.totalResults || 0) / 10)); // Assuming 10 results per page
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchInput]);

  useEffect(() => {
    fetchData(currentPage);
  }, [searchInput, currentPage]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className='relative min-h-screen pb-16'>
      <div className='mt-10 flex-col flex px-8 items-center'>
        {movies.length ? <p className='px-8 dark:text-white'>Results: {result}</p> : null}
        <div className='flex flex-wrap justify-center px-2 md:px-4 lg:px-12 gap-3'>
          {loading && (
            <div className='flex justify-center items-center mt-24'>
              <div className="spinner m-auto mt-24"></div> {/* Custom spinner */}
            </div>
          )}
          {!loading && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                cardClickHandler={cardClickHandler}
                movieId={movie.imdbID}
              />
            ))
          ) : (
            !loading && <p className='text-red-600 text-xl font-semibold mt-32'>No movies found !!</p>
          )}
        </div>
      </div>
      {movies.length > 0 && !loading && (
        <div className='w-full py-4 mt-8'>
          <div className='flex justify-center gap-2 w-full px-4'>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-3 py-1 md:px-4 md:py-2 rounded-full text-white bg-blue-600 dark:bg-slate-700 disabled:bg-gray-400 dark:disabled:bg-slate-500 disabled:cursor-not-allowed transition duration-200 transform hover:scale-105 dark:hover:bg-slate-600"
            >
              &laquo; 
            </button>
            <div className="flex space-x-2">
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  className={`px-3 py-1 md:px-4 md:py-2 rounded-full ${
                    page === currentPage
                      ? 'bg-blue-800 text-white dark:bg-slate-800'
                      : 'bg-blue-400 text-white dark:bg-slate-600'
                  } transition duration-200 transform hover:scale-105 dark:hover:bg-slate-500`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-1 md:px-4 md:py-2 rounded-full text-white bg-blue-600 dark:bg-slate-700 disabled:bg-gray-400 dark:disabled:bg-slate-500 disabled:cursor-not-allowed transition duration-200 transform hover:scale-105 dark:hover:bg-slate-600"
            >
               &raquo;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCards;