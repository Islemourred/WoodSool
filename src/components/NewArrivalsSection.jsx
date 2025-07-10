import { HeartIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import modele1 from '../assets/Modele1.png';
import modele2 from '../assets/Modele2.png';
import modele3 from '../assets/Modele3.png';
import PopupOrderForm from './PopupOrderForm';

const NewArrivalsSection = () => {
  const [favoriteArrivals, setFavoriteArrivals] = useState(Array(6).fill(false));
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollRef = useRef(null);
  // Drag-to-scroll state
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
    const walk = (x - startX.current) * 1.2; // scroll-fast
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const newArrivals = [
    {
      name: 'Wood ball',
      price: '750 Da',
      img: modele1,
      tag: 'NEW',
      discount: '-50%'
    },
    {
      name: 'Wood decoration',
      price: '4000 Da',
      img: modele2,
      tag: 'NEW',
      discount: ''
    },
    {
      name: 'Wood lump',
      price: '3500 Da',
      img: modele3,
      tag: 'NEW',
      discount: '-50%'
    },
    {
      name: 'Lovetemp I',
      price: '2000 Da',
      img: modele1,
      tag: '',
      discount: ''
    },
    {
      name: 'Lovetemp M',
      price: '1200 Da',
      img: modele2,
      tag: 'NEW',
      discount: ''
    },
    {
      name: 'Lovetemp XL',
      price: '3000 Da',
      img: modele3,
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
          <button onClick={handleScrollRight} className="text-orange-400 hover:text-orange-500 flex items-center gap-1 text-sm md:text-base">More Products <span>→</span></button>
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
              <div className="w-full h-28 md:h-36 flex items-center justify-center mb-4">
                <img src={product.img} alt={product.name} className="h-24 md:h-32 object-contain rounded-lg" />
              </div>
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