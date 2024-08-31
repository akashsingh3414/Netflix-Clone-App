import React from 'react';
import './ProfilePage.css';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function ProfilePage() {
  const user = useSelector(selectUser);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    console.log("User signed out");
    window.location.href = '/login';
  };

  return (
    <>  
      <Navbar onProfilePage={true} />
      <div className="profile-page-body">
        <h2 className="profile-page-title">Edit Profile</h2>
        <div className="profile-page-info">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="Profile" className="profile-page-image" />
          <div className="profile-page-details">
            <div className="profile-page-text">
              <h2>Email: {user.email}</h2>
              <h2>User ID: {user.uid}</h2>
              <h2>Your plan: Basic</h2>
            </div>
            <button
              onClick={handleSignOut}
              className="profile-page-signout"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
