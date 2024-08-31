import React, { useEffect } from 'react';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import ProfilePage from './components/ProfilePage';
import Movies from './pages/Movies';
import Tvshows from './pages/Tvshows';
import Toprated from './pages/Toprated';
import Searchpage from './components/Searchpage';

function App() {
  const dispatch = useDispatch();
  const userPresent = useSelector(selectUser);

  useEffect(() => {
    localStorage.removeItem('user');  //removes any existing user from local storage
    const userAuth = JSON.parse(localStorage.getItem('user'));

    if (!userAuth) {
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <div className='App'>
      <Router>
        {!userPresent.uid ? (
          <Routes>
            <Route path="/*" element={<LoginScreen />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/tv-shows" element={<Tvshows />} />
            <Route path="/top-rated" element={<Toprated />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/search-page" element={<Searchpage />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
