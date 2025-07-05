import newWood from '../assets/NewWood.png';

const PromoBannerSection = () => {
  return (
    <div className="scroll-animate flex flex-col md:flex-row items-center mb-16 md:mb-24 bg-white px-6 md:px-12 py-8 md:py-12 min-h-[400px] md:min-h-[500px]">
      <div className="w-full md:w-1/2 h-64 md:h-full flex items-center justify-center mb-6 md:mb-0">
        <img
          src={newWood}
          alt="Interior design"
          className="w-full h-full object-cover rounded-lg"
          style={{ minHeight: '250px', maxHeight: '350px' }}
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-16 flex flex-col justify-center h-full text-center md:text-left">
        <p className="text-blue-500 font-semibold mb-2 uppercase text-sm">SALE UP TO 35% OFF</p>
        <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          HUNDREDS of<br />New wood prices!
        </h2>
        <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">It's more affordable than ever to give every room in your home a stylish makeover</p>
        <button className="inline-flex items-center justify-center md:justify-start border-b-2 border-gray-900 text-gray-900 font-medium bg-transparent px-0 py-1 hover:text-blue-500 transition-colors group w-fit mx-auto md:mx-0 hover:border-blue-500">
          Shop Now
          <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  );
};

export default PromoBannerSection; 