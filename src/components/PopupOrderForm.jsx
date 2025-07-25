import React, { useState } from 'react';
import { ImageCarousel } from './ProductGrid';

const wilayas = [
  'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira',
  'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Algiers', 'Djelfa', 'Jijel', 'Sétif', 'Saïda',
  'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', 'M’Sila', 'Mascara', 'Ouargla', 'Oran',
  'El Bayadh', 'Illizi', 'Bordj Bou Arréridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued', 'Khenchela', 'Souk Ahras',
  'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent', 'Ghardaïa', 'Relizane', 'Timimoun', 'Bordj Badji Mokhtar', 'Ouled Djellal',
  'Béni Abbès', 'In Salah', 'In Guezzam', 'Touggourt', 'Djanet', 'El M’Ghair', 'El Meniaa'
];

const PopupOrderForm = ({ isOpen, onClose, onSubmit, product }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '+213',
    wilaya: wilayas[0],
  });
  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const orderData = {
      ...form,
      product: product ? {
        name: product.name,
        price: product.price,
        img: product.img,
      } : null,
    };
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      if (!response.ok) throw new Error('Order failed');
      setNotification({ type: 'success', message: 'Order placed successfully!' });
      if (onSubmit) onSubmit(orderData);
      setTimeout(() => {
        setNotification(null);
        setSubmitting(false);
        onClose();
      }, 2500);
    } catch (err) {
      setNotification({ type: 'error', message: 'Something went wrong. Please try again!' });
      setTimeout(() => {
        setNotification(null);
        setSubmitting(false);
      }, 2500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all scale-100 animate-popIn relative">
        {notification && (
          <div
            className={`fixed left-1/2 top-8 z-50 px-6 py-3 rounded-xl shadow-lg text-white text-center text-base font-semibold animate-popIn ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
            style={{ transform: 'translateX(-50%)', minWidth: 220 }}
          >
            {notification.message}
          </div>
        )}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-orange-400 text-center">Order Form</h2>

        {product && (
          <div className="flex flex-col items-center mb-4">
            <ImageCarousel images={product.imgs ? product.imgs : [product.img]} alt={product.name} />
            <h3 className="font-semibold text-gray-800 text-lg">{product.name}</h3>
            <p className="text-orange-500 text-base font-bold">{product.price}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            pattern="\+213[0-9]{9}"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <select
            name="wilaya"
            value={form.wilaya}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {wilayas.map((w) => (
              <option key={w} value={w}>{w}</option>
            ))}
          </select>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-orange-400 text-white py-2 rounded-xl font-bold hover:bg-orange-500 transition-colors"
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s; }
        @keyframes popIn { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .animate-popIn { animation: popIn 0.3s; }
      `}</style>
    </div>
  );
};

export default PopupOrderForm; 