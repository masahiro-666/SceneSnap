import React, { useState, useEffect, useRef } from "react";
import "./styles/styles.css";
import { Link } from "react-router-dom";
import { baseURL } from "./userIDConfig";
import axios from "axios";

interface Movie {
  movie_id: string;
  movie_thumbnail: string;
  movie_title: string;
  movie_trailer_video: string;
  movie_genre: string; // Comma-separated genres, e.g. "Action, Adventure"
  movie_rate: string;
  movie_duration: number;
  movie_dub: number;
  movie_sub: number;
  movie_cinema_seats: string;
}

function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // state for dropdown visibility
  const dropdownRef = useRef<HTMLDivElement>(null); // Reference for the dropdown container
  const [allGenres, setAllGenres] = useState<string[]>([]); // Store unique genres

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${baseURL}/movie/get`);
        setMovies(result.data); // Assuming the response has an array of movies

        // Extract all unique genres from movies
        const genres = new Set<string>();
        result.data.forEach((movie: Movie) => {
          movie.movie_genre.split(", ").forEach((genre) => genres.add(genre));
        });

        setAllGenres(Array.from(genres)); // Set unique genres
        setFilteredMovies(result.data); // Initially set all movies
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategories.includes('All')) {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(
        movies.filter((movie) =>
          selectedCategories.some((category) =>
            movie.movie_genre.split(', ').includes(category)
          )
        )
      );
    }
  }, [selectedCategories, movies]);

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      setSelectedCategories(['All']); // Reset to "All" and deselect others
    } else {
      setSelectedCategories((prevCategories) => {
        // If "All" is selected, it should be removed, and then the current category is added
        if (prevCategories.includes('All')) {
          return [category]; // Deselect "All" and select the clicked category
        }

        // Toggle the category selection
        if (prevCategories.includes(category)) {
          return prevCategories.filter((cat) => cat !== category);
        }
        return [...prevCategories, category];
      });
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false); // Close dropdown if the click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-white mx-20 page-container">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900">Movies</h2>

          {/* Category Select Dropdown with click */}
          <div className="mt-4 flex justify-end" ref={dropdownRef}>
            <button 
              onClick={toggleDropdown} 
              className="p-2 border rounded-md bg-gray-200 w-30 mr-4 text-left" // Smaller width
            >
              Filter by Genre
            </button>

            {isDropdownOpen && (
              <div className="absolute mt-10 mr-4 w-31 bg-white border border-gray-300 rounded-md shadow-lg z-10"> {/* Positioned to the right and smaller */}
                <ul className="py-2">
                  {['All', ...allGenres].map((category) => (
                    <li 
                      key={category} 
                      onClick={() => handleCategoryChange(category)}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${selectedCategories.includes(category) ? 'bg-gray-200' : ''}`}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredMovies.map((movie) => (
              <Link key={movie.movie_id} to={`/seat/${movie.movie_id}`}>
                <div className="group relative">
                  <img
                    alt={movie.movie_title}
                    src={movie.movie_thumbnail}
                    className="movie-img aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-100 lg:w-auto"
                  />
                  <div className="mt-4 flex justify-center">
                    <div className="text-center">
                      <h3 className="text-xl text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {movie.movie_title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;