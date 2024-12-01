import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'; // Import useParams from React Router
import "./styles/movieTitle.css";
import "./styles/movieSeats.css";
import Screen from "/screen.svg";
import SeatPremium from "/event_premium.svg";
import SeatPrime from "/event_prime.svg";
import SeatSelect from "/event_select.svg";
import SUB from "/SUB.svg";
import DUB from "/DUB.svg";
import Duration from "/duration.svg";
import SeatUnavilable from "/event_unavilable.svg";
import axios from "axios";
import { baseURL } from "./userIDConfig";

const seatRows = [
  { label: "J", seats: 16, type: "premium" },
  { label: "H", seats: 16, type: "premium" },
  { label: "G", seats: 16, type: "premium" },
  { label: "F", seats: 16, type: "premium" },
  { label: "E", seats: 16, type: "premium" },
  { label: "D", seats: 16, type: "premium" },
  { label: "C", seats: 16, type: "prime" },
  { label: "B", seats: 16, type: "prime" },
  { label: "A", seats: 16, type: "prime" },
];

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

const genreMap: { [key: number]: string } = {
  1: "Adventure",
  2: "Animation",
  3: "Comedy",
  4: "Drama",
};

const convertToEmbedURL = (url: string | undefined): string => {
    if (!url) {
      return ''; // Return an empty string if the URL is undefined or empty
    }
  
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.*\/|(?:v|e(?:mbed)?)\/|\S*\?v=))([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  
    return ''; // Return an empty string if no valid YouTube URL is found
  };


const Movie: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [bookedSeats, setBookedSeats] = useState<string[]>(["D-5", "F-3", "A-2", "C-7"]);

  const { movieId } = useParams<{ movieId: string }>(); // Get movieId from the URL

  // Fetch movie data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${baseURL}/movie/getEachMovie/${movieId}`);
        setMovie(result.data); // Assuming the response returns a single movie object
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };
    if (movieId) {
      fetchData();
    }
  }, [movieId]);

  const handleSeatClick = (row: string, seatNumber: number) => {
    const seatId = `${row}-${seatNumber}`;
    if (bookedSeats.includes(seatId)) {
      return;
    }

    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seatId)
        ? prevSelected.filter((seat) => seat !== seatId)
        : [...prevSelected, seatId]
    );
  };

  const getSeatPrice = (type: string) => {
    if (type === "premium") return 300;
    if (type === "prime") return 600;
    return 0;
  };

  const totalPrice = selectedSeats.reduce((total, seat) => {
    const [rowLabel] = seat.split("-");
    const row = seatRows.find((r) => r.label === rowLabel);
    return total + getSeatPrice(row?.type || "");
  }, 0);

  const URL = movie?.movie_trailer_video;
  const embedURL = convertToEmbedURL(URL);

  if (!movie) return <div>Loading...</div>; // Show loading until movie data is fetched

  return (
    <div className="container mx-auto py-20">
      <div className="gap-8 px-6 my-20 lg:px-60">
        {/* Movie Title and Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white max-w-[800px] h-[220px] p-6 rounded-lg shadow-lg">
          <div className="relative flex justify-center items-center">
            <img
              className="absolute top-1/2 transform -translate-y-1/2 w-50 h-auto rounded-lg shadow-lg object-cover"
              src={movie.movie_thumbnail}
              alt={movie.movie_title}
            />
          </div>
          <div>
            <div className="space-y-4 text-left">
              <h1 className="mt-5 text-3xl font-bold">{movie.movie_title}</h1>
              <p className="text-gray-600">
                Genre:{" "}
                {movie.movie_genre}
              </p>
              <ul className="flex flex-wrap gap-4 text-gray-600">
                <li className="flex items-center gap-2 h-6">
                    <img src={Duration} alt="" />
                    <span className="whitespace-nowrap">{movie.movie_duration} Min</span>
                </li>
                <li  className="flex items-center gap-2 ml-6 w-6 h-6">
                <img src={DUB} alt="DUB" />
                {movie.movie_dub ? movie.movie_dub : '-'}
                </li>
                <li  className="flex items-center gap-2 ml-6 w-6 h-6">
                <img src={SUB} alt="SUB" />
                {movie.movie_sub ? movie.movie_sub : '-'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Seats Section */}
      <div className="mt-40 movie-seats-container">
        <div className="seatmap-section">
          <div className="seat-price-container">
            <div className="seat-price">
              <img src={SeatPremium} className="seat-price-img" alt="premium" />
              <p>Event Premium</p>
              <p>300 THB</p>
            </div>
            <div className="seat-price">
              <img src={SeatPrime} className="seat-price-img" alt="premium" />
              <p>Event Prime</p>
              <p>600 THB</p>
            </div>
          </div>
          <div className="screen">
            <img src={Screen} className="screen-img" alt="Screen" />
            <p>Screen</p>
          </div>
          <table className="seatmap">
            <tbody>
              {seatRows.map((row, index) => (
                <tr key={index} className="movie-seat">
                  <td className="row-label row-label-L">{row.label}</td>
                  {[...Array(row.seats)].map((_, seatIndex) => {
                    const seatId = `${row.label}-${seatIndex + 1}`;
                    const isBooked = bookedSeats.includes(seatId);
                    const isSelected = selectedSeats.includes(seatId);

                    return (
                      <td
                        key={seatIndex}
                        className={`seat ${row.type}`}
                        onClick={() =>
                          handleSeatClick(row.label, seatIndex + 1)
                        }
                        style={{
                          cursor: isBooked ? "default" : "pointer",
                        }}
                      >
                        {isBooked ? (
                          <img
                            src={SeatUnavilable}
                            className="seat-unavailable"
                            alt="unavailable"
                          />
                        ) : isSelected ? (
                          <img src={SeatSelect} alt="selected" />
                        ) : row.type === "premium" ? (
                          <img src={SeatPremium} alt="premium" />
                        ) : (
                          <img src={SeatPrime} alt="prime" />
                        )}
                      </td>
                    );
                  })}
                  <td className="row-label row-label-R">{row.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Seat Selection Summary Section */}
        <div className="bg-slate-50 rounded-md px-5 w-1/4 mr-14">
        <div className=" justify-center text-center">
          <h2 className="mt-10 text-2xl font-extrabold">{movie.movie_title}</h2>
          <iframe className="mt-8 mx-auto aspect-w-16 aspect-h-9 w-[250px] rounded-lg"
          src={embedURL}
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </div>
          <div className="border-t mt-6"></div>
          <p className="mt-6">Selected Seat:</p>
          <div className="font-extrabold select-seat min-h-[100px]">
            {selectedSeats.length === 0 ? (
              <p>-</p>
            ) : (
              selectedSeats
                .sort((a, b) => {
                  const [rowA, seatA] = a.split("-");
                  const [rowB, seatB] = b.split("-");

                  // Sort by row letter first (A-Z), then by seat number (1-n)
                  if (rowA === rowB) {
                    return seatA - seatB; // Compare seat numbers if rows are the same
                  }
                  return rowA.localeCompare(rowB); // Compare row labels if rows are different
                })
                .map((seat, index) => (
                  <p key={index}>{seat}</p>
                ))
            )}
          </div>
          <div className="border-t mt-6 justify-center text-center">
            <p className="text-lg mt-6 font-bold">Total</p>
            <p className="text-2xl mt-1 font-bold">{totalPrice} THB</p>
            <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-zinc-800"
                    >
                      Continue
                    </a>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Movie;