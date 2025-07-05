import { Truck, CreditCard, Lock, Phone as LucidePhone } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
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
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-8 md:my-16 py-8 md:py-12 bg-white">
      {features.map((feature, index) => (
        <div key={index} className="scroll-animate-stagger text-center">
          {feature.icon}
          <h3 className="font-semibold text-sm md:text-xl text-black mb-1 md:mb-2">{feature.title}</h3>
          <p className="text-[#F0D2D2] text-xs md:text-sm font-medium">{feature.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection; 