import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing GitHub and LinkedIn icons

function About() {
  return (
    <div className="dark:bg-slate-900 min-h-screen w-full pt-28 bg-gray-100 pb-16 flex justify-center items-center">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md sm:max-w-4 md:max-w-4xl lg:max-w-5xl mx-4 md:mx-16">
        
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
          About This Project
        </h1>

        {/* Description of the movie search app */}
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
          This Movie Search application allows users to search for movies and view detailed information like:
          <ul className="list-disc pl-5 mt-2">
            <li>Title, Genre, Director, and Writer</li>
            <li>Actors, Awards, Ratings</li>
            <li>Box Office collection, Runtime, and more</li>
          </ul>
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
          The data for this application is fetched from the <strong>OMDb API</strong>, which provides access to a vast collection of movie and TV show data.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
          This project was created by <strong>Kuldeep Singh</strong>, and it allows users to explore movies and TV shows by their search criteria.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
          This project uses React for the front-end and integrates with the OMDb API to fetch data dynamically. It's designed to provide an easy-to-use interface for searching movies, viewing their details, and navigating through the app with a seamless user experience.
        </p>

        {/* Tech Stack Section */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md mt-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Tech Stack:
          </h3>
          <ul className="list-disc pl-5 text-lg text-gray-700 dark:text-gray-200">
            <li>React.js for building the user interface</li>
            <li>OMDb API for fetching movie and TV show data</li>
            <li>React Router for navigation between pages</li>
            <li>Tailwind CSS for responsive styling</li>
          </ul>
        </div>

        {/* Links to GitHub and LinkedIn with Icons */}
        <div className="text-center mt-6">
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
            You can find more about the project or reach out to me through the following links:
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/singhkuldeep01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-700 dark:text-white hover:text-slate-900 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kuldeep-singh-rajput-095a282b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-700 dark:text-white hover:text-slate-900 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
