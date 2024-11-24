import React from "react";
import "./styles/movieTitle.css";

function movieTitle() {
  return (
    <div className="container py-10">
      <div className="grid px-72">
        <div className="movie-detail grid grid-cols-2 items-center justify-center gap-x-2">
          <div className="poster items-end justify-end text-right content-end ">
            <img
              className="pl-32 shadow hover:shadow-sm"
              src="https://lh3.googleusercontent.com/GaBes2eElGwZMj0hXJ2U14e2es5fIBCnEXl6XYQqXJEbYQGLAjX7Wq78R0Z0vc3xKhwvx9abYbicI6slEkRFBofMrkaVZ5tCiw=w260"
            />
          </div>
          <div className="movie-detail">
            <div className="grid grid-rows-3 content-start items-start justify-start text-left">
              <div className="main-detail">
                <h1 className="name">โมอาน่า 2</h1>
              </div>
              <p>หมวดหมู่: Adventure, Animation, Comedy</p>
              <ul className="">
                <li className="inline-block px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </li>
                <li className="inline-block px-3">100 นาที</li>
                <li className="inline-block px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                    />
                  </svg>
                </li>
                <li className="inline-block px-3">Eng</li>
                <li className="inline-block px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </li>
                <li className="inline-block px-3">TH</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default movieTitle;
