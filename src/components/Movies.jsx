import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

export default function Movies() {


    const [ movies, setMovies ] = useState([])

    const [ page, setPage ] = useState(1)

  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=${page}`
    ).then((res) => {
        setMovies(res.data.results);
        
    })
  }, [page]);
  return (
    <>
      <div className='p-5'>
        <div className='text-2xl m-5 font-semibold text-center'>
          Trending Movies
        </div>
      </div>

      <div className='flex flex-row flex-wrap justify-around'>
        {movies.map((movie) => {
           return <MovieCard movie={movie}/>
        })}
      </div>

      <div className='flex justify-center'>
        
        <button onClick={() => setPage((page) => page > 1? page-1: 1)}>{"<--"}</button>
        Page {page}
        <button onClick={() => setPage(page+1)}>{"-->"}</button>
        
        </div>
    </>
  );
}
