import { Phone as LucidePhone } from 'lucide-react';
import { Instagram } from 'lucide-react';

const TopBar = () => {
  return (
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
  );
};

export default TopBar; 