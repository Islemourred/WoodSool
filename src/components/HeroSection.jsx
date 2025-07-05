import { useState, useEffect } from 'react';
import HeroBg from "../assets/Hero_img.png";
import HeroCompo from '../assets/Hero_compo.png';

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const fullText = "WOOD SOOL";
  const [showCursor, setShowCursor] = useState(true);

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
    <div 
      id="home" 
      className="hero-animate flex flex-col items-center justify-center py-8 md:py-16 my-4 md:my-8 relative"
    >
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
  );
};

export default HeroSection; 