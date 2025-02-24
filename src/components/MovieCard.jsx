export default function MovieCard({ movie, handleAddToWatchList, handleDelFromWatchList, watchList }) {
    // check if the movie is in the watchlist
    function containsMovie(movie) {
      for (let i = 0; i < watchList.length; i++) {
          if (watchList[i].id === movie.id) {
              return true;
          }
      }
      return false;
  }
  
  
    return (
      <div
        className='h-[50vh] w-[240px] bg-center bg-cover rounded-xl m-6 hover:scale-105 duration-200 hover:cursor-pointer relative group'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
        }}
      >

        <div
          onClick={() =>
            containsMovie(movie)
              ? handleDelFromWatchList(movie)
              : handleAddToWatchList(movie)
          }
          className={`absolute top-3 right-3 text-4xl flex justify-center items-center p-2 bg-black h-9 w-9 rounded-md transition-colors duration-200  ${
            containsMovie(movie) ? 'text-red-600 ' : 'text-white'
          }`}
        >
          &#x2665;
        </div>
  
  
        <div className='absolute bottom-0 w-full bg-black bg-opacity-60 text-zinc-50 text-center font-medium py-2 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
          {movie.title}
        </div>
      </div>
    );
  }