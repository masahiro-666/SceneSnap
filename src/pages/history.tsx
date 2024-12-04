import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";
import { baseURL } from "../components/userIDConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth

interface Booking {
  booking_id: number;
  customer_id: string;
  movie_id: string;
  booking_seat: string;
  booking_at: string;
  booking_price: number;
}

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

function History() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [movies, setMovies] = useState<Map<string, Movie>>(new Map()); // Store movie details by movie_id
  const [error, setError] = useState<string | null>(null);
  const [userID, setUserID] = useState<string | null>(null); // Track userID

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserID(user.uid); // Set Firebase user ID
      } else {
        setError("User not logged in.");
      }
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);
  
  console.log('user here', userID);

  useEffect(() => {
    if (userID) {
      const fetchData = async () => {
        try {
          const result = await axios.get(`${baseURL}/booking/getEachUser/${userID}`);
          setBookings(result.data); // Assuming response is an array of bookings
        } catch (error) {
          console.error("Error fetching bookings:", error);
          setError("Failed to fetch booking history. Please try again later.");
        }
      };

      fetchData();
    }
  }, [userID]);

  // Fetch movie details for each booking
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetailsPromises = bookings.map(async (booking) => {
          const result = await axios.get(`${baseURL}/movie/getEachMovie/${booking.movie_id}`);
          return result.data;
        });

        const movieDetails = await Promise.all(movieDetailsPromises);
        const movieMap = new Map<string, Movie>();
        movieDetails.forEach((movie) => {
          movieMap.set(movie.movie_id, movie);
        });

        setMovies(movieMap);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError("Failed to fetch movie details. Please try again later.");
      }
    };

    if (bookings.length > 0) {
      fetchMovieDetails();
    }
  }, [bookings]);

  console.log('movies here', movies);

  return (
    <>
      <div className="app-container">
        <div className="max-md:hidden z-10">
          <Navbar />
        </div>
        <div className="page-container max-md:hidden">
          <div className="bg-gray-100 min-h-screen p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Booking History</h1>

            {error && <p className="text-red-500 text-center mb-6">{error}</p>}

            {bookings.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                {bookings.map((booking) => {
                  const movie = movies.get(booking.movie_id); // Get movie details based on movie_id
                  return (
                    <div
                      key={booking.booking_id}
                      className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                    >
                      {/* Movie Title and Thumbnail */}
                      <div className="flex justify-between items-center mb-4">
                        {movie ? (
                          <>
                            <h2 className="text-xl font-semibold text-gray-700">{movie.movie_title}</h2>
                          </>
                        ) : (
                          <p>Loading movie details...</p>
                        )}
                      </div>

                      {/* QR Code and Ticket Code */}
                      <div className="flex flex-col items-center mb-4">
                      {movie ? (
                          <>
                            <img
                              src={movie.movie_thumbnail}
                              alt={movie.movie_title}
                              className="w-[250px] object-cover"
                            />
                          </>
                        ) : (
                          <p>Loading movie details...</p>
                        )}
                      </div>

                      {/* Booking Details */}
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">{new Date(booking.booking_at).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Time:</span>
                          <span className="font-medium">{new Date(booking.booking_at).toLocaleTimeString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Seat:</span>
                          <span className="font-medium">{booking.booking_seat}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Price:</span>
                          <span className="font-medium">{booking.booking_price}</span>
                        </div>
                      </div>

                      {/* Terms and Conditions */}
                      <div className="mt-4 border-t border-gray-200 pt-4 text-xs text-gray-500">
                        <p>
                          This transaction is strictly non-exchangeable and non-refundable. Terms
                          and conditions may apply.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-600 text-center">No booking history found.</p>
            )}
          </div>
        </div>
        <div className="max-md:hidden">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default History;