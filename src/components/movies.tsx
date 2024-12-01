import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import { Link } from "react-router-dom";
import { baseURL } from "./userIDConfig";
import axios from "axios";

interface Movie {
  movie_id: string;
  movie_thumbnail: string;
  movie_title: string;
  movie_trailer_video: string;
  movie_genre: string;
  movie_rate: string;
  movie_duration: number;
  movie_dub: number;
  movie_sub: number;
  movie_cinema_seats: string;
}

function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${baseURL}/movie/get`);
        setMovies(result.data); // Assuming the response has an array of movies
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, []);

  console.log(`Movies:`, movies); 

  return (
    <>
      <div className="bg-white mx-20 page-container">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Movies
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {movies.map((movie) => (
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
