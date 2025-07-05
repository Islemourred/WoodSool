import heroimg2 from '../assets/Hero_img2.png';

const TopWoodSection = () => {
  return (
    <div 
      id="shop" 
      className="scroll-animate bg-[#EFEFEF] rounded-xl p-6 md:p-12 mb-8 md:mb-12"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl md:text-5xl font-bold text-orange-400 mb-2">Choose Our Top wood</h2>
          <h2 className="text-2xl md:text-5xl font-bold text-orange-400">Furniture</h2>
          <button className="bg-orange-400 text-white px-6 py-2 rounded-xl mt-4 md:mt-8 hover:bg-orange-500">
            Shop Now
          </button>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
          <img
            src={heroimg2}
            alt="Wooden bowl"
            className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TopWoodSection; 