export default function MovieCard({movie}) {

console.log(movie);

    return (
        <div className="h-[65vh] w-[310px] bg-center bg-cover rounded-xl m-6 hover:scale-105 duration-200 hover:cursor-pointer relative"  style={{backgroundImage : `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}}>
            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-zinc-50 text-center font-medium py-2 rounded-b-xl">
        {movie.title}
      </div>
        </div>
    )
}