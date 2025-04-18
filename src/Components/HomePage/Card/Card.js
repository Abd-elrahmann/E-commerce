import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ imageSrc, title, advantages }) => {
  return (
    <motion.div
      className="border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white w-72 m-4 text-center transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-lg"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.5 }} 
    >
      <img src={imageSrc} alt={title} className="w-full h-44 object-cover border-b border-gray-300 transition-transform duration-300 ease-in-out hover:transform hover:scale-105" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-3 text-gray-800 leading-relaxed">{title}</h3>
        <ul className="list-none p-0 m-0">
          {advantages.map((advantage, index) => (
            <li key={index} className="text-base text-gray-600 mb-2 leading-relaxed">
              {advantage}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Card;
