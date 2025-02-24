import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export default function Movies({ handleAddToWatchList, handleDelFromWatchList, watchList }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${page}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [page]);

  return (
    <>
      <div className='p-5'>
        <div className='text-2xl m-5 font-semibold text-center'>
          Trending Movies
        </div>
      </div>

      <div className='flex flex-row flex-wrap justify-around'>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleAddToWatchList={handleAddToWatchList}
            handleDelFromWatchList={handleDelFromWatchList}
            watchList={watchList}
          />
        ))}
      </div>

      <div className='flex justify-center'>
        <button className='p-2 mb-10 hover:bg-slate-400 border border-black bg-slate-300 h-8' onClick={() => setPage((page) => (page > 1 ? page - 1 : 1))}><FaArrowLeft /></button>
        <div className='mb-10 pl-2 pr-2 bg-slate-300 border border-black flex text-xl items-center'>Page {page}</div>
        <button className='p-2 mb-10 hover:bg-slate-400 border border-black bg-slate-300 h-8' onClick={() => setPage(page + 1)}><FaArrowRight/></button>
      </div>
    </>
  );
}