import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { removeFromCart, removeItemDirectly, clearCart, addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart.items);
  const dispatch = useDispatch();

  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const storedAddress = localStorage.getItem("address");
    if (storedAddress) {
      setAddress(storedAddress);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("address", address);
  }, [address]);

  const totalPrice = shoppingCart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleAdd = (productId) => {
    dispatch(addToCart({ id: productId }));
  };

  const handleRemoveAllProduct = () => {
    toast.warning("All products have been removed from your cart.", {
      autoClose: 1000,
    });
    dispatch(clearCart());
  };

  const handleDeleteDirect = (productId) => {
    toast.info("The product has been removed from your cart.", {
      autoClose: 1000,
    });
    dispatch(removeItemDirectly(productId));
  };

  const handleRemoveFromQuantity = (productId, quantity) => {
    if (quantity > 1) {
      dispatch(removeFromCart(productId));
    } else {
      toast.info("The product has been removed from your cart.", {
        autoClose: 1000,
      });
      dispatch(removeFromCart(productId));
    }
  };

  const handleAddressChange = () => {
    setIsEditingAddress(true);
  };

  const handleSaveAddress = () => {
    if (address.trim() === "") {
      toast.error("You must enter an address first.", {
        autoClose: 2000,
      });
      return;
    }
    setIsEditingAddress(false);
    localStorage.setItem("address", address);
    toast.success(`Your shipping address has been updated to: ${address}`, {
      autoClose: 1000,
    });
  };

  return (
    <div className="container mx-auto p-6 lg:p-8">
      <ToastContainer />

      {shoppingCart.length > 0 ? (
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Cart Items */}
          <div className="w-full md:w-3/4 space-y-6">
            {shoppingCart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-lg rounded-lg border border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-20 h-24 md:w-20 md:h-28 object-cover rounded-lg"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-md font-semibold text-gray-800">
                      {product.title}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium text-gray-600">Price</span>
                    <span className="text-gray-600 text-lg">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="px-3 py-1 mr-4 text-lg bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                      onClick={() => handleRemoveFromQuantity(product.id, product.quantity)}
                    >
                      -
                    </button>
                    <span className="mx-2 text-2xl font-bold">{product.quantity}</span>
                    <button
                      className="px-3 py-1 ml-4 text-lg bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                      onClick={() => handleAdd(product.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium text-gray-600">Total Price</span>
                    <span className="text-gray-800 font-semibold text-xl">
                      ${(product.price * product.quantity).toFixed(2)}
                    </span>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteDirect(product.id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="w-full md:w-1/4 bg-white p-6 shadow-lg rounded-lg border border-gray-200 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800">Cart Summary</h2>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between text-lg">
                <span>Total Items:</span>
                <span className="font-bold">{shoppingCart.length}</span>
              </div>
              <div className="text-lg">
                <span className="font-semibold">Shopping:</span>
                {isEditingAddress ? (
                  <div>
                    <input
                      type="text"
                      className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <button
                      className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                      onClick={handleSaveAddress}
                    >
                      Save Address
                    </button>
                  </div>
                ) : (
                  <div>
                    <p>Shopping to: <span className="font-bold">{address}</span></p>
                    <button
                      className="text-blue-600 hover:underline mt-2"
                      onClick={handleAddressChange}
                    >
                      Change Address
                    </button>
                  </div>
                )}
              </div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total Price:</span>
                <span className="text-green-600 font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="space-y-4 mt-6">
                <button
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
                  onClick={handleRemoveAllProduct}
                >
                  Remove All Products
                </button>
                <Link to="/checkout">
                  <button className="w-full bg-blue-500 text-white py-2 mt-3 rounded-lg hover:bg-blue-600 transition duration-300">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600">
          <p>Your cart is empty.</p>
          <Link to="/">
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
