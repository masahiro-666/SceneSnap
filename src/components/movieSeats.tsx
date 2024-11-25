import React, { useState } from "react";
import "./styles/movieSeats.css";
import Screen from "/screen.svg";
import SeatPremium from "/event_premium.svg";
import SeatPrime from "/event_prime.svg";
import SeatSelect from "/event_select.svg";
import SeatUnavilable from "/event_unavilable.svg";

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

function MovieSeats() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([
    "D-5", "F-3", "A-2", "C-7",
  ]);

  const handleSeatClick = (row, seatNumber) => {
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

  const getSeatPrice = (type) => {
    if (type === "premium") return 300;
    if (type === "prime") return 600;
    return 0;
  };

  const movieDetils = {
    title:'Moana 2',
    urlVDO:'https://www.youtube.com/embed/CfnM5JFmvVo'
  };

  const totalPrice = selectedSeats.reduce((total, seat) => {
    const [rowLabel] = seat.split("-");
    const row = seatRows.find((r) => r.label === rowLabel);
    return total + getSeatPrice(row.type);
  }, 0);

  return (
    <div className="movie-seats-container">
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
                {/* Left label column */}
                <td className="row-label row-label-L">{row.label}</td>

                {/* Seat columns */}
                {[...Array(row.seats)].map((_, seatIndex) => {
                  const seatId = `${row.label}-${seatIndex + 1}`;
                  const isBooked = bookedSeats.includes(seatId);
                  const isSelected = selectedSeats.includes(seatId);

                  return (
                    <td
                      key={seatIndex}
                      className={`seat ${row.type}`}
                      onClick={() => handleSeatClick(row.label, seatIndex + 1)}
                      style={{
                        cursor: isBooked ? "default" : "pointer",
                      }}
                    >
                      {isBooked ? (
                        <img src={SeatUnavilable} className="seat-unavailable" alt="unavailable" />
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

                {/* Right label column */}
                <td className="row-label row-label-R">{row.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-slate-50 rounded-md px-5 w-1/4 mr-14">
        <div className=" justify-center text-center">
          <h2 className="mt-10 text-2xl font-extrabold">{movieDetils.title}</h2>
          <iframe className="mt-8 mx-auto aspect-w-16 aspect-h-9 rounded-lg"
          src={movieDetils.urlVDO}
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
  );
}

export default MovieSeats;
