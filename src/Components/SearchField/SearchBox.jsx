import React, { useState } from 'react';
import './SearchBox.css';

function SearchBox({ searchInput, setSearchInput , loading }) {
  const [inputField, setInputField] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(inputField);
    setInputField('');
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white w-max flex justify-center rounded-full items-center shadow-md focus-within:border focus-within:border-blue-700'>
      <label htmlFor="search-input" className="material-symbols-outlined search">search</label>
      <input
        id="search-input"
        className='bg-transparent outline-none w-48 md:w-96 lg:w-[500px] px-4 py-2 text-lg'
        placeholder='Search for a Movie'
        onChange={(e) => { setInputField(e.target.value) }}
        value={inputField}
      />
      <button type='submit' className='text-white bg-blue-500 px-5 py-2 text-lg ml-2 hover:bg-blue-600 duration-75 rounded-tr-full rounded-br-full flex justify-center items-center min-w-24 lg:min-w-28'>
        {loading ? <span className="material-symbols-outlined animate-spin text-lg">autorenew</span> : 'Search'}
      </button>
    </form>
  );
}

export default SearchBox;