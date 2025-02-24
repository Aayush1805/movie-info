import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import WatchList from './components/WatchList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  const [watchList, setWatchList] = useState([]);

  function handleAddToWatchList(movie) {
    var newWatchList = [...watchList, movie]

    setWatchList(newWatchList)
    localStorage.setItem('movieList', JSON.stringify(newWatchList))
    console.log(newWatchList);
    
  }

  function handleDelFromWatchList(movieObj) {
    var filteredWatchList = watchList.filter((movie) => {
      return movie.id !=movieObj.id
    })
    
    //this will make sure to delete from localstorage as well after being clicked delete by user
    localStorage.setItem('movieList', JSON.stringify(filteredWatchList))

    setWatchList(filteredWatchList)
    console.log(filteredWatchList)
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('movieList')

    if(!moviesFromLocalStorage) {
      return
    } 

    setWatchList(JSON.parse(moviesFromLocalStorage))
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Banner />
                <Movies handleAddToWatchList={handleAddToWatchList} handleDelFromWatchList={handleDelFromWatchList} watchList={watchList} />
              </>
            }
          />
          <Route
            path='/watchlist'
            element={<WatchList watchList={watchList} setWatchList={setWatchList} handleDelFromWatchList={handleDelFromWatchList}/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}