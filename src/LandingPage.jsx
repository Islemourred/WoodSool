import { PhoneIcon, MagnifyingGlassIcon, HeartIcon, TruckIcon, BanknotesIcon, LockClosedIcon, PhoneArrowUpRightIcon, EnvelopeIcon, GlobeAltIcon, UserGroupIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import HeroBg from "./assets/Hero_img.png";
import Logo from './assets/Logo.svg';
import QRIcon from './assets/QR.svg';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import BgJoinUs from './assets/bg-JoinUS.png';
import newWood from './assets/NewWood.png';
import { Truck, CreditCard, Lock, Phone as LucidePhone } from 'lucide-react';
import HeroCompo from './assets/Hero_compo.png';
import heroimg2 from './assets/Hero_img2.png'
import modele1 from './assets/Modele1.png'
import modele2 from './assets/Modele2.png'
import modele3 from './assets/Modele3.png'
import { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const fullText = "WOOD SOOL";
  const [showCursor, setShowCursor] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  const scrollRef = useRef(null);
  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const [favoriteArrivals, setFavoriteArrivals] = useState(Array(newArrivals.length).fill(false));
  const handleToggleFavorite = (idx) => {
    setFavoriteArrivals(favs => favs.map((f, i) => i === idx ? !f : f));
  };

  useEffect(() => {
    setTypedText("");
    setCurrentIdx(0);
    const interval = setInterval(() => {
      setCurrentIdx((idx) => {
        if (idx < fullText.length) {
          setTypedText(fullText.slice(0, idx + 1));
          return idx + 1;
        } else {
          clearInterval(interval);
          return idx;
        }
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Top Bar */}
      <div className="bg-orange-400 w-full text-white text-base flex flex-row items-center px-4 md:px-12 py-4 gap-4 md:gap-8 min-h-[50px]">
        <div className="flex items-center gap-2">
          <LucidePhone className="w-4 h-4 mr-1" />
          <span className="tracking-wide text-xs md:text-sm">+213 6 99 65 44 23</span>
        </div>
        <div className="flex items-center gap-2">
          <Instagram className="w-4 h-4 mr-1" />
          <span className="tracking-wide text-xs md:text-sm">Woodsool</span>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 font-sans">
        {/* Navbar */}
        <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-100">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-8 text-gray-700 font-medium">
              <li>
                <a href="#home" className="text-orange-400 font-semibold">Home</a>
              </li>
              <li>
                <a href="#shop" className="hover:text-orange-400 cursor-pointer">Shop</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-orange-400 cursor-pointer">Categories</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 cursor-pointer">Contact</a>
              </li>
            </ul>
          </nav>
          
          {/* Desktop Search */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 rounded-xl px-4 py-2 text-sm text-gray-500 focus:outline-none w-[200px] lg:w-[300px] border-none shadow-sm pr-10"
                style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)' }}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm w-7 h-7 flex items-center justify-center">
                <MagnifyingGlassIcon className="w-5 h-5 text-black" />
              </span>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-4">
            <nav className="mb-4">
              <ul className="space-y-3 text-gray-700 font-medium">
                <li>
                  <a href="#home" className="block text-orange-400 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                </li>
                <li>
                  <a href="#shop" className="block hover:text-orange-400 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Shop</a>
                </li>
                <li>
                  <a href="#categories" className="block hover:text-orange-400 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Categories</a>
                </li>
                <li>
                  <a href="#contact" className="block hover:text-orange-400 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                </li>
              </ul>
            </nav>
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 rounded-xl px-4 py-2 text-sm text-gray-500 focus:outline-none w-full border-none shadow-sm pr-10"
                style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)' }}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm w-7 h-7 flex items-center justify-center">
                <MagnifyingGlassIcon className="w-5 h-5 text-black" />
              </span>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div id="home" className="flex flex-col items-center justify-center py-8 md:py-16 my-4 md:my-8 relative">
          <img src={HeroCompo} alt="Hero Compo" className="hidden md:block absolute top-12 -left-12 w-32 h-32 w-48 z-20 rotate-[-10deg] hero-compo-slide" />
          <div className="w-full max-w-7xl h-full rounded-tl-[100px] md:rounded-tl-[300px] rounded-tr-[50px] md:rounded-tr-[100px] rounded-br-[10px] rounded-bl-[75px] md:rounded-bl-[150px] overflow-hidden mb-6 relative h-64 md:h-96">
            <img src={HeroBg} alt="Woodworking craftsman" className="w-full h-full object-cover" />
            <div className="absolute inset-0"></div>
            <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
              <span style={{letterSpacing: '0.04em'}}>
                {typedText.split("").map((char, idx) => (
                  <span key={idx} className="fade-in-letter" style={{animationDelay: `${idx * 0.08}s`}}>{char}</span>
                ))}
                <span className="typing-cursor">{showCursor ? "|" : " "}</span>
              </span>
            </h1>
          </div>
        </div>

        {/* Top Wood Furniture Section */}
        <div id="shop" className="bg-[#EFEFEF] rounded-xl p-6 md:p-12 mb-8 md:mb-12">
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {[modele1,modele3,modele2,modele3,modele2,modele1
          ].map((imgSrc, index) => (
            <div key={index} className="bg-white rounded-xl p-4">
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

        {/* New Arrivals Section */}
        <div id="categories" className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-orange-400 mb-4 md:mb-0">New Arrivals</h2>
            <button onClick={handleScrollRight} className="text-orange-400 hover:text-orange-500 flex items-center gap-1 text-sm md:text-base">More Products <span>→</span></button>
          </div>
          <div ref={scrollRef} className="flex gap-4 md:gap-8 overflow-x-auto pb-4 scrollbar-hide" style={{scrollbarWidth: 'none'}}>
            {newArrivals.map((product, index) => (
              <div key={index} className="min-w-[220px] md:min-w-[260px] max-w-[220px] md:max-w-[260px] bg-white rounded-xl shadow p-4 flex flex-col items-center relative">
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
                <button className="w-full bg-orange-400 text-white py-2 rounded-md text-xs md:text-sm font-semibold mb-2 hover:bg-orange-500 transition">Add to cart</button>
                <h3 className="font-semibold text-gray-800 text-sm md:text-base text-center">{product.name}</h3>
                <p className="text-gray-500 text-xs md:text-sm text-center">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-8 md:my-16 py-8 md:py-12 bg-white">
          {[
            {
              icon: <Truck className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-4 text-black" strokeWidth={2} />,
              title: "Free Shipping",
              subtitle: "Order above $200"
            },
            {
              icon: <CreditCard className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-4 text-black" strokeWidth={2} />,
              title: "Cash on delivery",
              subtitle: "30 days guarantee"
            },
            {
              icon: <Lock className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-4 text-black" strokeWidth={2} />,
              title: "Secure Shipping",
              subtitle: "Secured by yalidine"
            },
            {
              icon: <LucidePhone className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-4 text-black" strokeWidth={2} />,
              title: "24/7 Support",
              subtitle: "Phone and Email support"
            },
          ].map((feature, index) => (
            <div key={index} className="text-center">
              {feature.icon}
              <h3 className="font-semibold text-sm md:text-xl text-black mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-[#F0D2D2] text-xs md:text-sm font-medium">{feature.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Promo Banner Section */}
        <div className="flex flex-col md:flex-row items-center mb-16 md:mb-24 bg-white px-6 md:px-12 py-8 md:py-12 min-h-[400px] md:min-h-[500px]">
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
      </div>

      {/* Newsletter Section */}
      <div
        id="contact"
        className="p-6 md:p-12 text-center relative overflow-hidden flex items-center justify-center min-h-[250px] md:min-h-[300px]"
        style={{
          backgroundImage: `url(${BgJoinUs})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative z-10 w-full max-w-2xl mx-auto rounded-2xl p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">Sign up for deals, new products and promotions</p>
          <div className="flex flex-col items-center w-full max-w-lg mx-auto">
            <div className="flex w-full items-center border-b border-gray-300 py-2 bg-transparent">
              <EnvelopeIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 px-2 py-1 text-sm md:text-base"
              />
              <button className="ml-auto text-gray-500 font-medium hover:text-orange-400 bg-transparent border-none shadow-none px-2 py-1 text-sm md:text-base">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-orange-400 text-white pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            <div className="lg:col-span-1">
              <h3 className="font-bold text-lg mb-4">Exclusive</h3>
              <div className="mb-2 font-semibold">Subscribe</div>
              <div className="text-white/70 text-sm">Get 10% off your first order</div>
            </div>
            <div className="lg:col-span-1">
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <div className="text-white/90 text-sm leading-relaxed mb-2">111 Bijoy sarani, Dhaka,<br/>DH 1515, Bangladesh.</div>
              <div className="text-white/90 text-sm mb-2">exclusive@gmail.com</div>
              <div className="text-white/90 text-sm">+213 - 567450734</div>
            </div>
            <div className="lg:col-span-1">
              <h3 className="font-bold text-lg mb-4">Account</h3>
              <ul className="space-y-1 text-white/90 text-sm">
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
              </ul>
            </div>
            <div className="lg:col-span-1">
              <h3 className="font-bold text-lg mb-4">Quick Link</h3>
              <ul className="space-y-1 text-white/90 text-sm">
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="lg:col-span-1">
              <h3 className="font-bold text-lg mb-4">Our social media</h3>
              <div className="flex space-x-4 md:space-x-6 mb-4 justify-center md:justify-start">
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                <Twitter className="w-5 h-5 md:w-6 md:h-6" />
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex justify-center md:justify-start">
                <img src={QRIcon} alt="QR Code" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg" />
              </div>
            </div>
          </div>
          <hr className="border-white/20 my-6 md:my-8" />
          <div className="text-center text-xs text-white/60 flex items-center justify-center gap-1">
            <span className="text-base">©</span>
            <span>Copyright Ephyre 2025. All right reserved</span>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        .fade-in-letter {
          animation: fadeInLetter 0.1s ease-in-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInLetter {
          to {
            opacity: 1;
          }
        }
        
        .typing-cursor {
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .hero-compo-slide {
          animation: slideInFromLeft 1.5s ease-out;
        }
        
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-500px) rotate(-10deg);
            opacity: 0;
          }
          to {
            transform: translateX(0) rotate(-10deg);
            opacity: 1;
          }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default LandingPage