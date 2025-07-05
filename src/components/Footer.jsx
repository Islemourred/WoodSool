import { Facebook, Instagram, Linkedin } from 'lucide-react';
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
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