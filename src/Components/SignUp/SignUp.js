import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../store/signUpSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Signup Failed',
        text: 'Passwords do not match.',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (username && password && email && firstName && lastName) {
      dispatch(signup({ username, password, email, firstName, lastName }));
      navigate('/login');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Signup Failed',
        text: 'Please fill in all fields.',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className='w-full max-w-md mx-auto p-5 bg-gray-100 shadow-lg rounded-lg mt-5'>
      <h2 className='text-2xl text-center font-bold text-gray-800 mb-4'>Sign Up</h2>
      <div className='mb-4'>
        <label htmlFor='firstName' className='block text-sm font-medium text-gray-600 mb-2'>First Name</label>
        <input
          type='text'
          id='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='lastName' className='block text-sm font-medium text-gray-600 mb-2'>Last Name</label>
        <input
          type='text'
          id='lastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='username' className='block text-sm font-medium text-gray-600 mb-2'>Username</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-sm font-medium text-gray-600 mb-2'>Email</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='password' className='block text-sm font-medium text-gray-600 mb-2'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-600 mb-2'>Confirm Password</label>
        <input
          type='password'
          id='confirmPassword'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <button 
        onClick={handleSignup} 
        className='w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300'
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
