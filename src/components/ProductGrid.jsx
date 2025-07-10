import modele1 from '../assets/Modele1.png';
import modele2 from '../assets/Modele2.png';
import modele3 from '../assets/Modele3.png';
import React, { useState } from 'react';
import PopupOrderForm from './PopupOrderForm';

const ProductGrid = () => {
  const products = [modele1, modele3, modele2, modele3, modele2, modele1];
  const [popupOpen, setPopupOpen] = useState(false);

  const handleProductClick = () => {
    setPopupOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {products.map((imgSrc, index) => (
          <div
            key={index}
            className="scroll-animate-stagger bg-white rounded-xl p-4 cursor-pointer hover:shadow-lg transition"
            onClick={handleProductClick}
          >
            <div className="w-full h-48 md:h-64 mb-4 bg-[#EFEFEF] rounded-xl flex items-center justify-center">
              <img
                src={imgSrc}
                alt={`Product ${index + 1}`}
                className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-lg"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-base md:text-lg">Module 1</h3>
            <p className="text-gray-500 text-sm md:text-md">30000DA</p>
          </div>
        ))}
      </div>
      <PopupOrderForm isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
};

export default ProductGrid; 