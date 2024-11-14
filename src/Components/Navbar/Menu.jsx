import React from 'react';
import { useNavigate } from 'react-router-dom';

function Menu({ setIsMenuOpen }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row md:space-x-6 text-center items-center">
      <p
        onClick={() => {
          setIsMenuOpen(false);
          navigate('/');
        }}
        className='px-4 py-2 rounded-lg w-full md:w-auto cursor-pointer transition duration-200 
                   hover:bg-slate-200 dark:hover:bg-slate-600 dark:hover:text-white
                   bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-slate-200 flex items-center justify-center'
      >
        Home
      </p>

      <p
        onClick={() => {
          setIsMenuOpen(false);
          navigate('/');
        }}
        className='px-4 py-2 rounded-lg w-full md:w-auto cursor-pointer transition duration-200 
                   hover:bg-slate-200 dark:hover:bg-slate-600 dark:hover:text-white
                   bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-slate-200 flex items-center justify-center'
      >
        Search
      </p>

      <p
        onClick={() => {
          setIsMenuOpen(false);
          navigate('/about');
        }}
        className='px-4 py-2 rounded-lg w-full md:w-auto cursor-pointer transition duration-200 
                   hover:bg-slate-200 dark:hover:bg-slate-600 dark:hover:text-white
                   bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-slate-200 flex items-center justify-center'
      >
        About
      </p>
    </div>
  );
}

export default Menu;
