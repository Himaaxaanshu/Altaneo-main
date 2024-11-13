import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
const imgUrl = import.meta.env.VITE_IMAGE_URL;

const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black text-white flex items-center justify-center lg:justify-start px-4 lg:px-8">
      {/* Background video */}
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
        <source src={imgUrl + '/img/others/heroVid.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero text content */}
      <div className="relative z-10 hero-text max-w-lg  font-serif text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">
          <span className="whitespace-nowrap font-serif">Simple, Transparent, and</span><br />
        </h1>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-2 font-bold">
          <span className="whitespace-nowrap font-serif">Fast Global Transactions</span>
        </h1>
        <p className="text-sm sm:text-base lg:text-base font-serif text-white mb-6">
          Say goodbye to long wait times! Our hassle-free platform empowers you to access quick funding and easily send funds to settle your invoices. We will help you grow your business with faster cash flow.
        </p>

        <div className="flex justify-center lg:justify-start space-x-4">
          <a href="/login" target="_blank">
            <button className="bg-blue-600 text-white font-serif font-semibold py-2 sm:py-4 px-4 rounded-full">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
