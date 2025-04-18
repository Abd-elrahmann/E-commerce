// components/UserProfile.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from '../store/userProfileSlice';
import { logout } from '../store/loginSlice';
import Swal from 'sweetalert2';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setUsername(user.username || '');
      setFirstName(user.firstName || '');
      setLastName(user.lastName || '');
      setEmail(user.email || '');
    }
  }, [user]);

  const handleSave = () => {
    if (username && firstName && lastName && email) {
      const updatedProfile = { username, firstName, lastName, email };
      // Update local storage with new profile
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const updatedUsers = users.map(user =>
        user.username === username ? updatedProfile : user
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      // Update Redux store
      dispatch(updateUserProfile(updatedProfile));
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: 'Your profile has been updated successfully!',
        confirmButtonText: 'OK',
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Information',
        text: 'Please fill out all fields.',
        confirmButtonText: 'OK',
      });
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="max-w-screen-md mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h1 className="text-3xl font-semibold mb-4">User Profile</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Edit Profile Information</h2>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Save Changes
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 ml-3 rounded-lg hover:bg-red-600 transition duration-300 mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
