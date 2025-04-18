import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { setSearchTerm, setFilteredProducts } from '../store/searchSlice';
import { logout } from '../store/loginSlice';
import Swal from 'sweetalert2';
import { clearCart } from '../store/cartSlice';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Navbar2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const products = useSelector((state) => state.products.items);
  const shoppingCart = useSelector((state) => state.shoppingCart.items);
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const user = useSelector((state) => state.login.user) || {}; // Ensure user is always defined
  const formattedUsername = user.username ? user.username.charAt(0).toUpperCase() + user.username.slice(1) : 'User';

  const handleSearch = (event) => {
    const term = event.target.value;
    dispatch(setSearchTerm(term));

    const filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    dispatch(setFilteredProducts(filteredProducts));
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success('You have been logged out successfully.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  
    dispatch(clearCart());
    localStorage.removeItem('shoppingCart'); 
  }

  
  const handleCartClick = () => {
    if (!isAuthenticated) {
      Swal.fire({
        title: 'Login Required',
        text: 'You must be logged in to access your cart.',
        icon: 'warning',
        confirmButtonText: 'Login',
        showCancelButton: true,
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    } else {
      navigate('/products/cart');
    }
  };

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 max-w-screen-lg mx-auto mt-3">
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-xl cursor-pointer transition-colors duration-300 sm:hidden"
          onClick={handleCartClick}
        />
        <p className="text-2xl font-bold text-black">E-commerce</p>
      </div>
      <div className="flex-grow flex justify-center mb-4 sm:mb-0">
        <input
          type="text"
          placeholder="Search for any product"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full text-lg outline-none focus:border-blue-500 focus:ring-2
           focus:ring-blue-200 transition-all duration-300 mb-4 sm:mb-0"
          aria-label="Search for products"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-xl cursor-pointer transition-colors duration-300"
            onClick={handleCartClick}
          />
          <span className="absolute top-[-20px] right-[-10px] bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">
            {shoppingCart.length}
          </span>
        </div>
        {isAuthenticated ? (
          <div className="flex items-center space-x-2">
            <Link to={`/${formattedUsername}/profile`} className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faUser} className="text-xl text-black" />
              <span className="text-lg font-semibold">Welcome {formattedUsername}</span>
            </Link>
            <button onClick={handleLogout} className="bg-red-600 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-300 hover:bg-red-700">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Link to="/login" className="text-blue-600 text-lg hover:underline">Login</Link>
            <span>/</span>
            <Link to="/signup" className="text-blue-600 text-lg hover:underline">Register</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar2;
