import { useState } from 'react';
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
    console.log(newWatchList);
    
  }

  function handleDelFromWatchList(movieObj) {
    var filteredWatchList = watchList.filter((movie) => {
      return movie.id !=movieObj.id
    })

    setWatchList(filteredWatchList)
    console.log(filteredWatchList)
  }

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
            element={<WatchList watchList={watchList} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}