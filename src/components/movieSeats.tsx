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
    <div className="container py-12">
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <div className="theater-info py-4">
            <ul className="seat-type">
              <li className="inline-block px3 px-12">
                <div className="seat-icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 36 40"
                    className="seat w-24 h-24"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M26.834,24.003L26.834,24.003l0,1.968h0v0.736v0.567v0.167l0,0v0.046c-8.545-1.967-13.848-0.621-17.649,0.198v-0.181v-0.229v-0.5v-0.732v-2.039v-0.609H5.245L7.006,35h2.18v-3.5h17.649V35h0h2.181l1.751-11.606h-3.932V24.003z"
                        className="fill-[#28ACE0]"
                      />
                      <path
                        d="M8.893,22.226L8.893,22.226c0.245,0,0.444-0.199,0.444-0.443v-1.301c0-0.245-0.199-0.444-0.444-0.444l0,0h-3.45C5.199,20.038,5,20.237,5,20.481v0.067v1.234l0.068,0.445h3.826V22.226z"
                        className="fill-[#28ACE0]"
                      />
                      <path
                        d="M26.834,8.294C26.834,6.475,25.358,5,23.538,5H12.481c-1.82,0-3.296,1.475-3.296,3.294v4.456h17.649V8.294z"
                        className="fill-[#28ACE0]"
                      />
                      <rect
                        x="10.061"
                        y="23.393"
                        width="0.011"
                        height="0.001"
                        className="fill-white"
                      />
                      <path
                        d="M27.119,22.226L27.119,22.226c-0.227,0-0.411-0.199-0.411-0.443v-1.301c0-0.245,0.184-0.444,0.411-0.444l0,0h3.47c0.227,0,0.411,0.199,0.411,0.444v0.067v1.234l-0.063,0.445h-3.819V22.226z"
                        className="fill-[#28ACE0]"
                      />
                      <path
                        d="M26.829,13.917v4.954h-0.437c-0.62,0-0.831,0.522-0.831,1.167l0.022,5.99c-2.733-0.786-5.061-0.96-7.575-1.017h-0.004c-2.513,0.057-4.842,0.231-7.575,1.017l0.022-5.99c0-0.644-0.211-1.167-0.831-1.167H9.185v-4.954"
                        className="fill-[#28ACE0]"
                      />
                    </g>
                  </svg>
                </div>
                <p className="name">Event Premium</p>
                <p className="price">300 บาท</p>
              </li>
              <li className="inline-block px3 px-12">
                <div className="seat-icon">
                  <svg
                    viewBox="0 0 36 40"
                    className="w-24 h-24 fill-current text-blue-600" // Tailwind classes for size and color
                  >
                    <g>
                      <path
                        d="M25.153,27.355c-0.006-0.002-0.011-0.004-0.017-0.006c-1.636-0.644-3.272-0.995-4.826-1.15
            c-1.486-0.148-2.897-0.12-4.161,0c-2.71,0.258-4.744,0.932-5.392,1.169c-0.026,0.01-0.046,0.017-0.068,0.025
            c0.066,3.59-0.006,7.262-0.013,7.608h2.009h10.539h1.941C25.158,34.654,25.086,30.957,25.153,27.355z"
                      />
                      <path d="M5.526,35h0.026c-0.009-0.013-0.018-0.026-0.026-0.04V35z" />
                      <path
                        d="M30.928,23.667c-0.028-0.145-0.063-0.288-0.106-0.427c-0.299-0.978-0.957-1.812-1.828-2.337
            c-0.623-0.375-1.355-0.593-2.144-0.593c0,0-0.085,0.521-0.194,1.421c-0.017,0.138-0.034,0.286-0.052,0.442
            c-0.026,0.234-0.054,0.487-0.081,0.757c-0.018,0.18-0.036,0.368-0.054,0.563c-0.009,0.097-0.018,0.197-0.026,0.298
            c-0.018,0.202-0.035,0.411-0.051,0.626c-0.017,0.215-0.033,0.437-0.048,0.664c-0.031,0.455-0.058,0.933-0.08,1.431
            c-0.009,0.212-0.018,0.428-0.025,0.646c-0.006,0.167-0.011,0.334-0.016,0.505c-0.017,0.662-0.028,1.334-0.034,1.989
            c-0.004,0.436-0.006,0.865-0.007,1.278c-0.001,1.136,0.009,2.154,0.02,2.888c0.002,0.134,0.004,0.258,0.006,0.371
            C26.214,34.699,26.222,35,26.222,35h2.134c0.107,0,0.21-0.017,0.311-0.04c0.18-0.043,0.346-0.122,0.491-0.229
            c0.188-0.14,0.337-0.326,0.431-0.545c0.046-0.106,0.083-0.217,0.1-0.336l0.627-4.358l0.642-4.465
            c0.022-0.156,0.036-0.31,0.041-0.463C31.008,24.257,30.983,23.957,30.928,23.667z"
                      />
                      <path
                        d="M9.619,27.661c-0.004-0.17-0.01-0.338-0.016-0.505c-0.008-0.218-0.016-0.434-0.025-0.646
            c-0.022-0.498-0.049-0.976-0.08-1.431c-0.015-0.227-0.031-0.449-0.048-0.664c-0.017-0.215-0.034-0.424-0.051-0.626
            c-0.009-0.101-0.018-0.2-0.027-0.298c-0.018-0.195-0.036-0.383-0.054-0.563c-0.027-0.27-0.054-0.523-0.081-0.757
            c-0.018-0.156-0.035-0.303-0.052-0.442c-0.109-0.9-0.194-1.421-0.194-1.421c-0.45,0-0.881,0.074-1.283,0.209
            c-0.268,0.09-0.522,0.208-0.76,0.349c-0.238,0.141-0.46,0.307-0.662,0.492c-0.303,0.278-0.562,0.603-0.767,0.96
            C5.179,22.918,4.989,23.608,5,24.336c0.002,0.146,0.012,0.293,0.031,0.441l0.494,3.928l0.635,5.045
            c0.011,0.089,0.031,0.176,0.057,0.259c0.053,0.166,0.136,0.318,0.242,0.451c0.132,0.166,0.3,0.301,0.492,0.395
            C7.143,34.948,7.358,35,7.584,35h0h2.035c0,0,0.007-0.301,0.016-0.813c0.002-0.114,0.004-0.238,0.006-0.371
            c0.011-0.734,0.021-1.752,0.02-2.888c-0.001-0.413-0.003-0.842-0.007-1.278C9.648,28.994,9.637,28.323,9.619,27.661z"
                      />
                      <path
                        d="M25.072,6.573h-0.829v2.885v1.04c0,1.503-1.095,2.725-2.44,2.725h-7.765
            c-1.345,0-2.44-1.223-2.44-2.725v-1.04V6.573h-0.644c-1.194,0-2.122,1.161-1.986,2.486l1.744,17.084
            c1.838-0.641,8.037-2.427,14.466-0.027l1.879-17.036C27.203,7.747,26.273,6.573,25.072,6.573z"
                      />
                      <path
                        d="M13.06,11.591c0.25,0.28,0.596,0.453,0.978,0.453h7.765c0.382,0,0.728-0.173,0.978-0.453
            c0.063-0.07,0.119-0.146,0.169-0.229c0.149-0.247,0.236-0.544,0.236-0.864v-1.04V6.573V5v0H12.654v0v1.573v2.885v1.04
            c0,0.32,0.087,0.617,0.236,0.864C12.94,11.444,12.997,11.521,13.06,11.591z"
                      />
                    </g>
                  </svg>
                </div>
                <p className="name">Event Prime</p>
                <p className="price">600 บาท</p>
              </li>
              <li className="inline-block px3 px-3"></li>
            </ul>
          </div>

          <div className="seatmap-wrapper py-4">
            <div className="seatmap overflow-auto">
              <table className="table-seatmap">
                <tbody>
                  <tr>
                    {/* <td></td> */}
                    <td colSpan={20}>
                      <div className="screen-wrapper">
                        <div className="screen-image relative">
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
        <div>02</div>
      </div>
    </div>
  );
}

export default MovieSeats;