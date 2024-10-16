import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Homepage from './components/Homepage';
import LoginScreen from './components/LoginScreen';
import ProfilePage from './components/ProfilePage';
import Movies from './pages/Movies';
import Tvshows from './pages/Tvshows';
import Toprated from './pages/Toprated';
import Searchpage from './components/Searchpage';
import { selectUser, setUser, resetUser } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const userPresent = useSelector(selectUser);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      dispatch(setUser(storedUser));
    } else {
      dispatch(resetUser());
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
