import axios from "axios";
import { useEffect, useState } from "react";
import request from "../Request";
export default function Main() {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  const truncateStr = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else return str;
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div>
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
            <div className="my-4">
              <button className="border bg-gray-300 border-gray-300 text-black py-2 px-5 ">
                Play
              </button>
              <button className="border border-bg-gray-300 text-white py-2 px-5 ml-4 ">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm ">
              Released:{movie?.release_date}
            </p>
            <p className="w-full md:max-w-[50%] ld:">
              {truncateStr(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
