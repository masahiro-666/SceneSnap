import React from "react";
import "./styles/movieTitle.css";

function MovieTitle() {
  // Data object for the movie
  const movieData = {
    title: "Moana 2",
    posterUrl: "https://lh3.googleusercontent.com/GaBes2eElGwZMj0hXJ2U14e2es5fIBCnEXl6XYQqXJEbYQGLAjX7Wq78R0Z0vc3xKhwvx9abYbicI6slEkRFBofMrkaVZ5tCiw=w260",
    genres: [1, 2, 3], // Genre IDs
    duration: "100 Mins",
    languages: ["Eng", "TH"],
  };

  // Genre mapping
  const genreMap = {
    1: "Adventure",
    2: "Animation",
    3: "Comedy",
    4: "Drama",
    // Add more genres as needed
  };

  return (
    <div className="container mx-auto py-20">
      <div className="gap-8 px-6 my-20 lg:px-60">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white max-w-[800px] h-[200px] p-6 rounded-lg shadow-lg">
          {/* Poster Section */}
          <div className="relative flex justify-center items-center">
            <img
              className="absolute top-1/2 transform -translate-y-1/2 w-50 h-auto rounded-lg shadow-lg object-cover"
              src={movieData.posterUrl}
              alt={movieData.title}
            />
          </div>

          {/* Movie Details Section */}
          <div>
            <div className="space-y-4 text-left">
              {/* Title */}
              <h1 className="mt-5 text-3xl font-bold">{movieData.title}</h1>

              {/* Genre */}
              <p className="text-gray-600">
                Genre:{" "}
                {movieData.genres
                  .map((genreId) => genreMap[genreId])
                  .join(", ")}
              </p>

              {/* Details */}
              <ul className="flex flex-wrap gap-4 text-gray-600">
                {/* Duration */}
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 1 1 18 0Z"
                    />
                  </svg>
                  {movieData.duration}
                </li>

                {/* Languages */}
                {movieData.languages.map((language, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                    {language}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieTitle;