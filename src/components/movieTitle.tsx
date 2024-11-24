import React from "react";
import "./styles/movieTitle.css";

function movieTitle() {
  return (
    <div className="container py-10">
      <div className="grid px-72">
        <div className="grid grid-cols-2 items-center justify-center gap-x-6">
          <div className="poster">
            <img src="https://lh3.googleusercontent.com/GaBes2eElGwZMj0hXJ2U14e2es5fIBCnEXl6XYQqXJEbYQGLAjX7Wq78R0Z0vc3xKhwvx9abYbicI6slEkRFBofMrkaVZ5tCiw=w260" />
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default movieTitle;
