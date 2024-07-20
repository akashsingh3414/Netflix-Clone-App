import React, {useEffect} from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import { auth } from './hooks/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfilePage from './components/ProfilePage';
import Movies from './pages/Movies';
import Tvshows from './pages/Tvshows';
import Toprated from './pages/Toprated'
import Searchpage from './components/Searchpage';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  },[dispatch])

  return (
    <div className='App'>
      <Router>
        {!user ? (<LoginScreen />) : (
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
