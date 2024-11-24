import React from "react";
import movieSeatsMap from "./movieSeatsMap";
import "./styles/movieSeats.css";
import EventPremium from "/event_premium.svg";
import EventPrime from "/event_prime.svg";
import EventSuiteL from "/event_suite_L.svg";
import EventSuiteR from "/event_suite_R.svg";

function movieSeats() {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <div className="theater-info py-4">
            <ul className="seat-type">
              <li className="inline-block px3 px-12">
                <div className="seat-icon seat-box">
                  <img
                    src={EventPremium}
                    className="eventPremium-icon"
                    alt="seat"
                  />
                </div>
                <p className="name">Event Premium</p>
                <p className="price">300 บาท</p>
              </li>
              <li className="inline-block px3 px-12">
                <div className="seat-icon seat-box">
                  <img
                    src={EventPrime}
                    className="eventPrime-icon"
                    alt="seat"
                  />
                </div>
                <p className="name">Event Prime</p>
                <p className="price">600 บาท</p>
              </li>
              <li className="inline-block px3 px-12">
                <div className="seat-icon seat-box">
                  <img
                    src={EventSuiteL}
                    className="eventSuiteL-icon"
                    alt="seat"
                  />
                  <img
                    src={EventSuiteR}
                    className="eventSuiteR-icon"
                    alt="seat"
                  />
                </div>
                <p className="name">Event Suite(Pair)</p>
                <p className="price">1000 บาท</p>
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

export default movieSeats;
