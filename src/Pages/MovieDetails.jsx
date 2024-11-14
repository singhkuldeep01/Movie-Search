import React, { useEffect , useState } from 'react'
import { useParams} from 'react-router-dom'

function MovieDetails() {
    const { id } = useParams();
    const [loading , setLoading] = useState(true);
    const [movieData, setMovieData] = useState({});
    const defaultPoster = 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/fb7fef67-6965-4775-b416-91661baa06d8/dd5be78d-ca35-4c9f-9d09-b09a6f3b2c95.png';
    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=a11863ac`);
                const data = await response.json();
                console.log(data);
                setMovieData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setLoading(false);
        }
        fetchData();
    }, [id]);
    if(loading) {
        return (
            <div className='dark:bg-slate-900 min-h-screen w-full pt-32 flex justify-center '>
                <h1 className='dark:text-white'>Loading...</h1>
            </div>
        )
    }
    
    if(!movieData.Title) {
        return (
            <div className='dark:bg-slate-900 min-h-screen w-full pt-24'>
                <h1>Movie not found</h1>
            </div>
        )
    }
  return (
   <div className="dark:bg-slate-900 flex-col min-h-screen w-full pt-28 dark:text-white bg-gray-100 pb-16 flex justify-center items-center">
        
      <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg max-w-md sm:max-w-4 md:max-w-4xl lg:max-w-5xl mx-4 md:mx-16">
        {/* Poster and Title */}
        <div className="flex flex-col md:flex-row items-center">
          <img
          src={movieData.Poster !== 'N/A' ? movieData.Poster : defaultPoster}
            alt={`${movieData.Title} poster`}
            className="w-1/2 sm:w-1/3 md:w-1/4 rounded-lg md:mb-0 mb-4"
          />
          <div className="md:ml-6 text-center md:text-left ">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200">
              {movieData.Title} ({movieData.Year})
            </h2>
            <p className="text-gray-600 dark:text-gray-400"><strong>Genre:</strong> {movieData.Genre}</p>
            <p className="text-gray-600 dark:text-gray-400"><strong>Director:</strong> {movieData.Director}</p>
            <p className="text-gray-600 dark:text-gray-400"><strong>Writer:</strong> {movieData.Writer}</p>
            <p className="text-gray-600 dark:text-gray-400"><strong>Language:</strong> {movieData.Language}</p>
            <p className="text-gray-600 dark:text-gray-400"><strong>Country:</strong> {movieData.Country}</p>
            <p className="text-gray-600 dark:text-gray-400"><strong>Box Office:</strong> {movieData.BoxOffice}</p>
          </div>
        </div>

        {/* Cards for Plot, Actors, Awards, Ratings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Plot Card */}
          <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Plot</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{movieData.Plot}</p>
          </div>

          {/* Actors Card */}
          <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Actors</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{movieData.Actors}</p>
          </div>

          {/* Awards Card */}
          <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Awards</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{movieData.Awards}</p>
          </div>

          {/* Ratings Card */}
          <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Ratings</h3>
            <p className="text-gray-600 dark:text-gray-400"><strong>Metascore:</strong> {movieData.Metascore}</p>
            <p className="text-gray-600 dark:text-gray-400"><strong>IMDb Rating:</strong> {movieData.imdbRating}</p>
            <p className="text-gray-600 dark:text-gray-400"><strong>IMDb Votes:</strong> {movieData.imdbVotes}</p>
            {/* Dynamic Ratings */}
            {movieData.Ratings && movieData.Ratings.length > 0 && (
              <div className="mt-2">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Other Ratings:</h4>
                <ul className="mt-1 space-y-1">
                  {movieData.Ratings.map((rating, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400">
                      <strong>{rating.Source}:</strong> {rating.Value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Additional Details */}
        <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg shadow-md mt-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Additional Details</h3>
          <p className="text-gray-600 dark:text-gray-400"><strong>Rated:</strong> {movieData.Rated}</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Released:</strong> {movieData.Released}</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Runtime:</strong> {movieData.Runtime}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails