import { HeartIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import modele1 from '../assets/Modele1.png';
import modele2 from '../assets/Modele2.png';
import modele3 from '../assets/Modele3.png';
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
    <div className="relative w-full h-28 md:h-36 flex items-center justify-center mb-4 rounded-xl overflow-hidden select-none">
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-orange-400 hover:text-white transition-colors rounded-full px-2 py-1 shadow z-10 text-xl disabled:opacity-50"
        aria-label="Previous image"
        disabled={animating}
      >&#8592;</button>
      <div className="relative h-24 md:h-32 w-full flex items-center justify-center">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={alt}
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-auto h-full object-contain rounded-lg transition-transform duration-300 ease-in-out
              ${idx === current ? 'z-20 opacity-100 translate-x-[-50%] scale-100' : 'z-10 opacity-0 pointer-events-none'}
              ${animating && idx === current && direction === 1 ? 'translate-x-[-90%] scale-95 opacity-0' : ''}
              ${animating && idx === current && direction === -1 ? 'translate-x-[-10%] scale-95 opacity-0' : ''}
              ${animating && idx !== current && idx === (direction === 1 ? (current + 1) % images.length : (current - 1 + images.length) % images.length)
                ? `opacity-100 translate-x-[-50%] scale-100` : ''}
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

const NewArrivalsSection = () => {
  const [favoriteArrivals, setFavoriteArrivals] = useState(Array(6).fill(false));
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.classList.add('cursor-grabbing');
  };
  const handleMouseLeave = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };
  const handleMouseUp = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const newArrivals = [
    {
      name: 'Wood ball',
      price: '750 Da',
      imgs: [modele1, modele2, modele3],
      tag: 'NEW',
      discount: '-50%'
    },
    {
      name: 'Wood decoration',
      price: '4000 Da',
      imgs: [modele2, modele3, modele1],
      tag: 'NEW',
      discount: ''
    },
    {
      name: 'Wood lump',
      price: '3500 Da',
      imgs: [modele3, modele1, modele2],
      tag: 'NEW',
      discount: '-50%'
    },
    {
      name: 'Lovetemp I',
      price: '2000 Da',
      imgs: [modele1, modele3, modele2],
      tag: '',
      discount: ''
    },
    {
      name: 'Lovetemp M',
      price: '1200 Da',
      imgs: [modele2, modele1, modele3],
      tag: 'NEW',
      discount: ''
    },
    {
      name: 'Lovetemp XL',
      price: '3000 Da',
      imgs: [modele3, modele2, modele1],
      tag: '',
      discount: ''
    },
  ];

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const handleToggleFavorite = (idx) => {
    setFavoriteArrivals(favs => favs.map((f, i) => i === idx ? !f : f));
  };

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product);
    setPopupOpen(true);
  };

  return (
    <>
      <div 
        id="categories" 
        className="scroll-animate mb-8 md:mb-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-orange-400 mb-4 md:mb-0">New Arrivals</h2>
          <button onClick={handleScrollRight} className="text-orange-400 hover:text-orange-500 flex items-center gap-1 text-sm md:text-base">More Products <span> →</span></button>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-8 overflow-x-auto pb-4 scrollbar-hide cursor-grab"
          style={{scrollbarWidth: 'none'}}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {newArrivals.map((product, index) => (
            <div key={index} className="scroll-animate-stagger min-w-[220px] md:min-w-[260px] max-w-[220px] md:max-w-[260px] bg-white rounded-xl shadow p-4 flex flex-col items-center relative">
              <button onClick={() => handleToggleFavorite(index)} className="absolute top-4 right-4 z-10">
                <HeartIcon className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-200 ${favoriteArrivals[index] ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} fill={favoriteArrivals[index] ? 'red' : 'none'} />
              </button>
              <div className="flex w-full justify-between items-center mb-2">
                {product.tag && <span className="text-xs font-bold text-orange-400">{product.tag}</span>}
              </div>
              {product.discount && <span className="absolute left-4 top-8 bg-green-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>}
              <ImageCarousel images={product.imgs} alt={product.name} />
              <button className="w-full bg-orange-400 text-white py-2 rounded-md text-xs md:text-sm font-semibold mb-2 hover:bg-orange-500 transition" onClick={() => handleAddToCartClick(product)}>Add to cart</button>
              <h3 className="font-semibold text-gray-800 text-sm md:text-base text-center">{product.name}</h3>
              <p className="text-gray-500 text-xs md:text-sm text-center">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <PopupOrderForm isOpen={popupOpen} onClose={() => setPopupOpen(false)} product={selectedProduct} />
    </>
  );
};

export default NewArrivalsSection; 