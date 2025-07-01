import { PhoneIcon, MagnifyingGlassIcon, HeartIcon, TruckIcon, BanknotesIcon, LockClosedIcon, PhoneArrowUpRightIcon, EnvelopeIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import HeroBg from "./assets/Hero_img.png";
import Logo from './assets/Logo.svg';
import QRIcon from './assets/QR.svg';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import BgJoinUs from './assets/bg-JoinUS.png';
import newWood from './assets/newWood.png';
import { Truck, CreditCard, Lock, Phone } from 'lucide-react';
import HeroCompo from './assets/Hero_compo.png';

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      {/* Top Bar */}
      <div className="bg-orange-400 w-full text-white text-base flex flex-row items-center px-12 py-4 gap-8 min-h-[50px]">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 mr-1" />
          <span className="tracking-wide text-sm">+213 6 99 65 44 23</span>
        </div>
        <div className="flex items-center gap-2">
          <Instagram className="w-4 h-4 mr-1" />
          <span className="tracking-wide text-sm">Woodsool</span>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 font-sans">
        {/* Navbar */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8 w-8" />
          </div>
          <nav className="flex-1 flex justify-center">
            <ul className="flex space-x-8 text-gray-700 font-medium">
              <li className="text-orange-400 font-semibold">Home</li>
              <li className="hover:text-orange-400 cursor-pointer">Shop</li>
              <li className="hover:text-orange-400 cursor-pointer">Categories</li>
              <li className="hover:text-orange-400 cursor-pointer">Contact</li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 rounded-xl px-4 py-2 text-sm text-gray-500 focus:outline-none w-[300px] border-none shadow-sm pr-6"
                style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)' }}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm w-7 h-7 flex items-center justify-center">
                <MagnifyingGlassIcon className="w-5  h-5 text-black" />
              </span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center py-16 my-8 relative">
          <img src={HeroCompo} alt="Hero Compo" className="absolute -top-0 -left-0 w-32 h-32 z-20 rotate-[-10deg] mt-24 ml-24" />
          <div className="w-full max-w-4xl rounded-tl-[300px] rounded-tr-[100px] rounded-br-[10px] rounded-bl-[150px] overflow-hidden mb-6 relative h-100 ">
            <img src={HeroBg} alt="Woodworking craftsman" className="w-full h-full object-cover" />
            <div className="absolute inset-0"></div>
            <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white text-center drop-shadow-lg">
              Wood sool
            </h1>
          </div>
        </div>

        {/* Top Wood Furniture Section */}
        <div className="bg-gray-100 rounded-3xl p-8 mb-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-orange-400 mb-2">Choose Our Top wood</h2>
              <h2 className="text-3xl font-bold text-orange-400">Furniture</h2>
              <button className="bg-orange-400 text-white px-6 py-2 rounded-full mt-4 hover:bg-orange-500">
                Shop Now
              </button>
            </div>
            <div className="w-32 h-32">
              <img
                src="/placeholder.svg?height=128&width=128"
                alt="Wooden bowl"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={item} className="bg-white rounded-2xl p-4 text-center">
                <div className="w-full h-32 mb-4 bg-gray-200 rounded-xl flex items-center justify-center">
                  <img
                    src={`/placeholder.svg?height=100&width=100`}
                    alt={`Product ${item}`}
                    className="w-20 h-20 object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-800">Module {item}</h3>
                <p className="text-gray-500 text-sm">300DHA</p>
              </div>
            ))}
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-orange-400">New Arrivals</h2>
            <button className="text-orange-400 hover:text-orange-500">View Products →</button>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {[
              { name: "Wood bowl", price: "300 Dh", tag: "Sale" },
              { name: "Wood decoration", price: "250 Dh", tag: "New" },
              { name: "Wood lamp", price: "180 Dh", tag: "New" },
              { name: "Luxurious", price: "200 Dh", tag: "" },
              { name: "Luxurious kit", price: "150 Dh", tag: "Hot" },
            ].map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-4 relative">
                {product.tag && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs rounded-full text-white ${
                      product.tag === "Sale" ? "bg-green-500" : product.tag === "New" ? "bg-blue-500" : "bg-red-500"
                    }`}
                  >
                    {product.tag}
                  </span>
                )}
                <div className="flex justify-end mb-2">
                  <HeartIcon className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>
                <div className="w-full h-32 mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt={product.name}
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-orange-400 font-bold mb-3">{product.price}</p>
                <button className="w-full bg-orange-400 text-white py-2 rounded-full text-sm hover:bg-orange-500">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-4 gap-8 my-16 py-12 bg-white">
          {[
            {
              icon: <Truck className="w-10 h-10 mx-auto mb-4 text-black" strokeWidth={2} />,
              title: "Free Shipping",
              subtitle: "Order above $200"
            },
            {
              icon: <CreditCard className="w-10 h-10 mx-auto mb-4 text-black" strokeWidth={2} />,
              title: "Cach on deleviry",
              subtitle: "30 days guarantee"
            },
            {
              icon: <Lock className="w-10 h-10 mx-auto mb-4 text-black" strokeWidth={2} />,
              title: "Secure Shipping",
              subtitle: "Secured by yalidine"
            },
            {
              icon: <Phone className="w-10 h-10 mx-auto mb-4 text-black" strokeWidth={2} />,
              title: "24/7 Support",
              subtitle: "Phone and Email support"
            },
          ].map((feature, index) => (
            <div key={index} className="text-center">
              {feature.icon}
              <h3 className="font-semibold text-xl text-black mb-2">{feature.title}</h3>
              <p className="text-[#F0D2D2] text-sm font-medium">{feature.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Promo Banner Section */}
        <div className="flex items-center mb-24 bg-white px-12 py-12 min-h-[500px]">
          <div className="w-1/2 h-full flex items-center justify-center">
            <img
              src={newWood}
              alt="Interior design"
              className="w-full h-full object-cover"
              style={{ minHeight: '350px', maxHeight: '500px' }}
            />
          </div>
          <div className="w-1/2 pl-16 flex flex-col justify-center h-full">
            <p className="text-blue-500 font-semibold mb-2 uppercase">SALE UP TO 35% OFF</p>
            <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
              HUNDREDS of<br />New wood prices!
            </h2>
            <p className="text-gray-600 mb-8 text-lg">It's more affordable than ever to give every room in your home a stylish makeover</p>
            <button className="inline-flex items-center border-b-2 border-gray-900 text-gray-900 font-medium bg-transparent px-0 py-1 hover:text-blue-500 transition-colors group w-fit hover:border-blue-500">
              Shop Now
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div
        className="p-12 text-center relative overflow-hidden flex items-center justify-center min-h-[300px] "
        style={{
          backgroundImage: `url(${BgJoinUs})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative z-10 w-full max-w-2xl mx-auto rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-8">Sign up for deals, new products and promotions</p>
          <div className="flex flex-col items-center w-full max-w-lg mx-auto">
            <form className="flex w-full items-center border-b border-gray-300 py-2 bg-transparent">
              <EnvelopeIcon className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 px-2 py-1"
              />
              <button type="submit" className="ml-auto text-gray-500 font-medium hover:text-orange-400 bg-transparent border-none shadow-none px-2 py-1">
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-orange-400 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-5 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Exclusive</h3>
              <div className="mb-2 font-semibold">Subscribe</div>
              <div className="text-[#fff7] text-sm">Get 10% off your first order</div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <div className="text-white/90 text-sm leading-relaxed mb-2">111 Bijoy sarani, Dhaka,<br/>DH 1515, Bangladesh.</div>
              <div className="text-white/90 text-sm mb-2">exclusive@gmail.com</div>
              <div className="text-white/90 text-sm">+213567450734</div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Account</h3>
              <ul className="space-y-1 text-white/90 text-sm">
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Link</h3>
              <ul className="space-y-1 text-white/90 text-sm">
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Our social media</h3>
              <div className="flex space-x-6  mb-4">
                <Facebook className="w-6 h-6" />
                <Twitter className="w-6 h-6" />
                <Instagram className="w-6 h-6" />
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="flex">
                <img src={QRIcon} alt="QR Code" className="w-20 h-20 object-contain" />
              </div>
              
            </div>
          </div>
          <hr className="border-white/20 my-8" />
          <div className="text-center text-xs text-white/60 flex items-center justify-center gap-1">
            <span className="text-base">©</span>
            <span>Copyright Ephyre 2022. All right reserved</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
