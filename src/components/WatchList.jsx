import { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import { genreIds } from '../utilities/genres';

export default function WatchList({ watchList, setWatchList, handleDelFromWatchList }) {



//For getting all the genres this can be implemented

  // function getMovieGenre(movie) {

  //   let allGenres = []
  //   for (let i = 0; i < movie.genre_ids.length; i++) {
  //     allGenres.push(genreIds[movie.genre_ids[i]])
  //   }

  //   return allGenres
  // }


  //getting only the first genre of the movie from the api that contains list of genres 
  //for this particular movie

  const [search, setSearch] = useState('');
  const [genreList, setGenreList] = useState([""])
  const [currentGenre, setCurrentGenre] = useState('All Genres')

  function getMovieGenre(movie) {

    return genreIds[movie.genre_ids[0]]
  }



  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleFilter(gen) {
    setCurrentGenre(gen)
  }

  function sortIncreasing() {
    let sortedIncreasing = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    })

    setWatchList([...sortedIncreasing])
  }


  function sortDecreasing() {
    let sortedDecreasing = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    })

    setWatchList([...sortedDecreasing])
  }

  useEffect(() => {
    let gList = watchList.map((movie) => {
      return getMovieGenre(movie)
    })
    gList = new Set(gList)
    console.log(gList);
    setGenreList(["All Genres", ...gList])
    
  }, [watchList])

  return (
    <>
      <div className='flex justify-center flex-wrap m-4'>
        {genreList.map((gen, genid) => {
          return <button key={genid} onClick={() => handleFilter(gen)} className={ currentGenre === gen? 'hover:bg-gray-500 bg-cyan-500 py-2 px-2 rounded-md text-white mr-4 mb-6 mt-6': 'hover:bg-cyan-500 bg-gray-500 py-2 px-2 rounded-md text-white mr-4 mb-6 mt-6'}>
          {gen}
        </button>
        })}
        
        
      </div>

      <div className='flex justify-center my-4'>
        <input
          onChange={handleSearch}
          className=' hover:bg-yellow-300/90 bg-yellow-300/70 h-[3rem] w-[18rem] border border-gray-950 text-gray-900 rounded-lg pl-3'
          type='text'
          value={search}
          placeholder='Search for movies...'
        />
      </div>

      <div className='overflow-hidden rounded-lg border ml-20 mr-20 mt-10'>
        <table className='w-full text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <div className='flex justify-center items-center'>
              <button onClick={sortIncreasing} className='p-2 hover:bg-slate-400 bg-slate-300 h-8'><FaArrowUp /></button>
                <th className='p-2'>Ratings</th>
                <button onClick={sortDecreasing} className='p-2 hover:bg-slate-400 bg-slate-300 h-8'><FaArrowDown /></button>
              </div>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchList.filter((movie) => {

              if(currentGenre == 'All Genres') {
                return true;
              } else {
                return getMovieGenre(movie) === currentGenre
              }
              
            }).filter((movie) => {
                return movie.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((movie) => {
                return (
                  <tr key={movie.id} className='border-b hover:bg-gray-50'>
                    <td className='flex items-center px-6 py-6'>
                      <img
                        className='w-20 bg-cover rounded-md'
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                      />
                      <div className='px-8'>{movie.title}</div>
                    </td>

                    <td>{movie.vote_average}</td>
                    <td>{movie.popularity}</td>

                    {/* for all the genres */}
                    {/* <td>{getMovieGenre(movie).map((genre) => {
                      return (<div>{genre}</div>)
                    })}</td> */}

                      {/* for the first genre */}
                      <td>{getMovieGenre(movie)}</td>

                    <td>
                      <button onClick={() => handleDelFromWatchList(movie)} className='bg-red-600 text-white w-16 px-2 py-2 rounded-md'>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}


          </tbody>
        </table>
      </div>
    </>
  );
}
