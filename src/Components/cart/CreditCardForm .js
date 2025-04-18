import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';

const CreditCardForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focused: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputFocus = (e) => {
    setFormData({ ...formData, focused: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="credit-card-form max-w-sm mx-auto p-4 bg-white shadow-md rounded-md">
      <Cards
        number={formData.number}
        name={formData.name}
        expiry={formData.expiry}
        cvc={formData.cvc}
        focused={formData.focused}
      />

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={formData.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name on Card"
            value={formData.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={formData.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-full sm:w-1/2 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={formData.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-full sm:w-1/2 p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default CreditCardForm;
