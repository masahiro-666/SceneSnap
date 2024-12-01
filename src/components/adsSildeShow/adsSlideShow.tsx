import React, { useEffect, useState } from 'react';
import './ads.css';
import Ads1 from "../mockups/adsQ.png";
import Ads2 from "../mockups/adsW.png";
import Ads3 from "../mockups/adsE.png";

const ads = [
  "https://shippingsea-images.s3.ap-southeast-1.amazonaws.com/ads/blackfriday.png",
  "https://shippingsea-images.s3.ap-southeast-1.amazonaws.com/ads/limitedtime.png",
  "https://shippingsea-images.s3.ap-southeast-1.amazonaws.com/ads/cybermonday.png"
];

function Ads() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Automatically scroll slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const handleNextSlide = () => {
    setIsAnimating(true);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Cycle through slides
  };

  const handlePrevSlide = () => {
    setIsAnimating(true);
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3); // Cycle back
  };

  const handleDotClick = (index: number) => {
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Desktop view */}
      <div className="ads-container max-md:hidden mb-3 relative w-fit mt-0">
        {[Ads1, Ads2, Ads3].map((ad, index) => (
          <div
            key={index}
            className={`w-full my-3 flex justify-center items-center relative ${currentSlide === index ? '' : 'hidden'}`}
          >
            <img src={ad} alt={`Ad ${index + 1}`} />
            <div className="prev" onClick={handlePrevSlide}>❮</div>
            <div className="next" onClick={handleNextSlide}>❯</div>
          </div>
        ))}
        <div className="dot-container max-lg:scale-75 max-lg:-mb-3">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'bg-white/75' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Mobile view with animation */}
      <div className="w-full overflow-hidden md:hidden snap-x snap-mandatory mb-2">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {ads.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full ml-10">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-11/12 snap-center aspect-video rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Ads;