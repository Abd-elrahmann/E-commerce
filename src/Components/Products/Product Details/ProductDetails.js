import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchProducts } from "../../store/productsSlice";
import { addToCart } from "../../store/cartSlice";
import Navbar2 from '../../Navbar/Navbar2';
import { Oval } from 'react-loader-spinner';

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.status === "loading");
  const product = useSelector((state) =>
    state.products.items.find((product) => product.id === parseInt(productId))
  );
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  useEffect(() => {
    if (!product) {
      dispatch(fetchProducts());
    }
  }, [dispatch, product, productId]);

  const handleAddToCart = () => {
    if (isAuthenticated) {
      if (product) {
        dispatch(addToCart(product));
        toast.success(`Product added successfully!`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.warn('You must be logged in to add products to your cart.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <Navbar2 />
      <div className="max-w-6xl mx-auto mt-6 p-6 rounded-lg shadow-lg border border-gray-200">
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <Oval color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          product && (
            <div className="flex flex-col items-center lg:flex-row lg:items-start">
              {/* Left Section: Product Image */}
              <div className="flex-1 p-4 lg:w-1/2 flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-44 h-auto object-cover rounded-lg"
                />
              </div>

              {/* Right Section: Product Details */}
              <div className="flex-1 p-4 lg:w-1/2 lg:pl-8 text-center lg:text-left">
                <h1 className="text-xl font-bold text-gray-900 mb-4">{product.title}</h1>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">${product.price}</h4>
                <button
                  onClick={handleAddToCart}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none mb-6"
                >
                  Add to Cart
                </button>
                <div className="text-center lg:text-left">
                  <p className="mb-4 text-gray-800 cursor-pointer">🚚 Delivery & Return</p>
                  <p className="mb-4 text-gray-800 cursor-pointer">❓ Ask a Question</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ProductDetails;
