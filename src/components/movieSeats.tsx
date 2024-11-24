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
  { label: "C", seats: 14, type: "prime" },
  { label: "B", seats: 14, type: "prime" },
  { label: "A", seats: 14, type: "prime" },
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
    if (type === "premium") return 100;
    if (type === "prime") return 200;
    return 0;
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

          <div className="seatmap-wrapper py-4">
            <div className="seatmap overflow-auto">
              <table className="table-seatmap">
                <tbody>
                  <tr>
                    {/* <td></td> */}
                    <td colSpan={20}>
                      <div className="screen-wrapper">
                        <div className="screen-image relative h-5 w-60">
                          <img src="/screen.svg" alt="" />
                        </div>
                        <div className="screen-text absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-50  p-4">
                          <span className="text-3xl font-bold">จอภาพยนตร์</span>
                        </div>
                        <div className="screen-text"></div>
                      </div>
                    </td>
                    {/* <td></td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="screen">
          <img src={Screen} className="screen-img" alt="Screen" />
          <p>Screen</p>
        </div>
        <table className="seatmap">
          <tbody>
            {seatRows.map((row, index) => (
              <tr key={index}>
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

      <div className="details-section">
        <h2>GG</h2>
        <hr />
        <p>Selected Seat:</p>
        <ul>
          {selectedSeats.map((seat, index) => (
            <li key={index}>{seat}</li>
          ))}
        </ul>
        <p>Total: {totalPrice} THB</p>
        <button className="proceed-button">Continue</button>
      </div>
    </div>
  );
}

export default MovieSeats;
