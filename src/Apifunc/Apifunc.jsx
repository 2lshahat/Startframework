import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

export default function Apifunc() {
  // to store Date  فى setstate  عشان اقدر اغير فالداتا عن طريق الfuncction
  const [trendingMovie, setTrendingMovie] = useState(null);
  // to Get data from Api
  async function getTrendingMovie() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODJjYmUxODFjMDQwMDc2YTJkNDRhZTMxNWI2ZmU2NSIsInN1YiI6IjY0ZmM3MDRmZGMxY2I0MDBjOGJmZDRhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hsM95FEIeoMc_RNntDMG_4oikx0ouzyL1JqHXUdxsPs",
        },
      }
    );
    setTrendingMovie(data.results);
  }

  // to rerender in mountDid comp
  useEffect(function () {
    getTrendingMovie();
  }, []);

  return (
    <>
      {trendingMovie === null ? (
        <div className="bg-secondary vh-100 d-flex justify-content-center  align-items-center">
          <i className="fa-solid fa-spin  fa-spinner fa-7x text-white"></i>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {trendingMovie.map(function (film, ids) {
              return (
                <div key={ids} className="col-md-3">
                  <div className="movie">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" + film.poster_path
                      }
                      alt={film.title}
                      className="w-100"
                    />
                    <h2 className="text-center">{film.title}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
