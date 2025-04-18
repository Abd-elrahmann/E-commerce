import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index }) => {
  if (!product) return null;

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden m-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl border border-gray-200 w-64"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: index * 0.1 }} 
    >
      <div className="flex justify-center items-center p-3 h-48">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-28 h-auto object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-125"
        />
      </div>
      <div className="p-4 bg-gray-100 text-center">
        <h3 className="text-lg font-semibold text-gray-800 truncate" title={product.title}>
          {product.title}
        </h3>
        <div className="flex justify-between items-center mt-2 mb-4">
          <h4 className="text-md text-blue-700 font-semibold">
            <span className="font-bold text-gray-800">Price:</span> ${product.price}
          </h4>
          <h4 className="text-md text-blue-700 font-semibold">
            <span className="font-bold text-gray-800">Rating:</span> {product.rating.rate}
          </h4>
        </div>
        <Link to={`/product/details/${product.id}`}>
          <button className="bg-blue-700 text-white py-2 px-4 rounded-md text-md mt-2 transition-colors duration-300 ease-in-out hover:bg-blue-800 hover:scale-105">
            View details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
