import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import CreditCardForm from './CreditCardForm ';

const Checkout = () => {
  const [loading, setLoading] = useState(false); // Loader starts as false
  const [paymentSubmitted, setPaymentSubmitted] = useState(false); // Track if payment was submitted
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePaymentSubmit = () => {
    setLoading(true); // Start loading spinner
    setPaymentSubmitted(true);

    // Simulate payment processing delay
    setTimeout(() => {
      setLoading(false); // Stop loading spinner after 5 seconds
      dispatch(clearCart());
      toast.success("Your order has been successfully placed!", {
        autoClose: 3000,
      });
    }, 5000);
  };

  const handleOrderMore = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      
      {loading ? (
        <div className="flex flex-col items-center">
          <Oval
            height={80}
            width={80}
            color="#00BFFF"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#00BFFF"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
          <p className="mt-4 text-lg text-gray-600">Processing your order...</p>
        </div>
      ) : paymentSubmitted ? (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-green-600">Order Successful!</h2>
          <button
            onClick={handleOrderMore}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Order More
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md mt-8">
            <CreditCardForm onSubmit={handlePaymentSubmit} /> {/* Pass payment submission handler */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
