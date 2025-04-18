import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/loginSlice';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  const handleLogin = async () => {
    if (username && password) {
      setLoading(true);
      try {
        await dispatch(login({ username, password }));
      } catch (error) {
        // Error handling is managed by the slice
      } finally {
        setLoading(false);
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Please fill in both username and password.',
        confirmButtonText: 'OK'
      });
    }
  };

  // Redirect if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 p-4 sm:p-6 lg:p-8">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-sm w-full sm:max-w-md lg:max-w-lg lg:mb-12">
        <h2 className="text-center mb-6 text-xl sm:text-2xl font-bold text-gray-800">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-semibold text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 font-semibold text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <p className="text-gray-600 mt-3 flex justify-center">
            Forgot your password?
            <Link to="/forgot-password" className="text-blue-500 hover:underline ml-1">Reset it</Link>
          </p>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
        <div className="text-center mt-4">
          <p className="text-gray-600 mt-2">
            Don't have an account?
            <Link to="/signup" className="text-blue-500 hover:underline ml-1">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
