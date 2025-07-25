import modele1 from '../assets/Modele1.png';
import modele2 from '../assets/Modele2.png';
import modele3 from '../assets/Modele3.png';
import React, { useState } from 'react';
import PopupOrderForm from './PopupOrderForm';

const ImageCarousel = ({ images, alt }) => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(0);

  const handleChange = (nextIdx, dir) => {
    if (animating || nextIdx === current) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(nextIdx);
      setAnimating(false);
    }, 300);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    handleChange((current === 0 ? images.length - 1 : current - 1), -1);
  };
  const nextImage = (e) => {
    e.stopPropagation();
    handleChange((current === images.length - 1 ? 0 : current + 1), 1);
  };
  const goToImage = (idx) => {
    if (idx === current) return;
    handleChange(idx, idx > current ? 1 : -1);
  };

  return (
    <div className="relative w-full h-48 md:h-64 mb-4 bg-[#EFEFEF] rounded-xl flex items-center justify-center overflow-hidden select-none">
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-orange-400 hover:text-white transition-colors rounded-full px-2 py-1 shadow z-10 text-xl disabled:opacity-50"
        aria-label="Previous image"
        disabled={animating}
      >&#8592;</button>
      <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={alt}
            className={`absolute top-0 left-0 w-full h-full object-contain rounded-lg transition-transform duration-300 ease-in-out
              ${idx === current ? 'z-20 opacity-100 translate-x-0 scale-100' : 'z-10 opacity-0 pointer-events-none'}
              ${animating && idx === current && direction === 1 ? 'translate-x-[-40%] scale-95 opacity-0' : ''}
              ${animating && idx === current && direction === -1 ? 'translate-x-[40%] scale-95 opacity-0' : ''}
              ${animating && idx !== current && idx === (direction === 1 ? (current + 1) % images.length : (current - 1 + images.length) % images.length)
                ? `opacity-100 translate-x-0 scale-100` : ''}
            `}
            style={{transitionProperty: 'transform, opacity'}}
            draggable={false}
          />
        ))}
      </div>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-orange-400 hover:text-white transition-colors rounded-full px-2 py-1 shadow z-10 text-xl disabled:opacity-50"
        aria-label="Next image"
        disabled={animating}
      >&#8594;</button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); goToImage(idx); }}
            className={`w-2.5 h-2.5 rounded-full border-2 border-orange-400 transition-all duration-200
              ${idx === current ? 'bg-orange-400 scale-125 shadow' : 'bg-white hover:bg-orange-200'}`}
            aria-label={`Go to image ${idx + 1}`}
            style={{outline: 'none'}}
            tabIndex={0}
            disabled={animating}
          />
        ))}
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const products = [
    { imgs: [modele1, modele2, modele3], name: 'Module 1', price: '30000DA' },
    { imgs: [modele3, modele1, modele2], name: 'Module 3', price: '35000DA' },
    { imgs: [modele2, modele3, modele1], name: 'Module 2', price: '32000DA' },
    { imgs: [modele3, modele2, modele1], name: 'Module 3', price: '35000DA' },
    { imgs: [modele2, modele1, modele3], name: 'Module 2', price: '32000DA' },
    { imgs: [modele1, modele3, modele2], name: 'Module 1', price: '30000DA' },
  ];
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPopupOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="scroll-animate-stagger bg-white rounded-xl p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => handleProductClick(product)}
          >
            <ImageCarousel images={product.imgs} alt={product.name} />
            <h3 className="font-semibold text-gray-800 text-base md:text-lg">{product.name}</h3>
            <p className="text-gray-500 text-sm md:text-md">{product.price}</p>
          </div>
        ))}
      </div>
      <PopupOrderForm
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        product={selectedProduct}
      />
    </>
  );
};

export { ImageCarousel };
export default ProductGrid;