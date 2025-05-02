'use client';
import { useState } from 'react';

export default function CartelCustomizationPanel({ burger, onClose }) {
  const toppings = [
    { id: 'lettuce', label: 'Lettuce', price: 5 },
    { id: 'pickles', label: 'Pickles', price: 5 },
    { id: 'onion', label: 'Onion', price: 5 },
    { id: 'jalapenos', label: 'Jalapeños', price: 5 }
  ];

  const [selectedAddOns, setSelectedAddOns] = useState({
    lettuce: false, pickles: false, onion: false, jalapenos: false,
    cheese: false, meal: false
  });

  const toggleAddOn = (key) => {
    setSelectedAddOns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-full sm:w-1/2 lg:w-1/3 bg-white p-6 overflow-y-auto shadow-xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold">&times;</button>
        <h2 className="text-2xl font-bold mb-4">Cartel Customization</h2>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Toppings <span className="text-gray-500 text-sm">(+5 PKR each)</span>:</h3>
          <div className="space-y-2 ml-2">
            {toppings.map(item => (
              <label key={item.id} className="flex items-center">
                <input 
                  type="checkbox"
                  checked={selectedAddOns[item.id]}
                  onChange={() => toggleAddOn(item.id)}
                  className="mr-2 accent-yellow-500"
                />
                {item.label} <span className="text-gray-600 ml-1">(+{item.price} PKR)</span>
              </label>
            ))}
          </div>
        </div>

        <label className="flex items-center mb-3 ml-2">
          <input 
            type="checkbox"
            checked={selectedAddOns.cheese}
            onChange={() => toggleAddOn('cheese')}
            className="mr-2 accent-yellow-500"
          />
          Add Cheese <span className="text-gray-600 ml-1">(+99 PKR)</span>
        </label>

        <label className="flex items-center mb-6 ml-2">
          <input 
            type="checkbox"
            checked={selectedAddOns.meal}
            onChange={() => toggleAddOn('meal')}
            className="mr-2 accent-yellow-500"
          />
          Make it a Meal – Fries + Drink <span className="text-gray-600 ml-1">(+330 PKR)</span>
        </label>

        <button 
          className="w-full bg-yellow-500 text-black font-semibold py-3 rounded hover:bg-yellow-400 transition"
          onClick={() => {
            alert('Added to Cart!'); 
            onClose();
          }}
        >
          Add to Cart
        </button>
      </div>

      <style jsx global>{`
        body {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
