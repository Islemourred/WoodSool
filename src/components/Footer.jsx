import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import QRIcon from '../assets/QR.svg';

const Footer = () => {
  return (
    <footer className="scroll-animate bg-orange-400 text-white pt-12 md:pt-16 pb-6 md:pb-8">
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
  );
};

export default Footer; 