import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import EnlargedImage from "./EnlargedImage";
const ImageCarousel = ({ images, enlargeImage, setEnlargeImage }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const handleNext = () => {
    setCurrIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const handlePrev = () => {
    setCurrIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  useEffect(() => {
    let autoAdvance;
    if (!enlargeImage) {
      autoAdvance = setInterval(handleNext, 5000);
    }
    return () => {
      if (autoAdvance) {
        clearInterval(autoAdvance);
      }
    };
  }, [enlargeImage]);
  return (
    <section className=" mt-4 w-full overflow-hidden">
      {enlargeImage && (
        <EnlargedImage
          image={images[currIndex]}
          setEnlargeImage={setEnlargeImage}
          handleNext={handleNext}
          handlePrev={handleNext}
        />
      )}
      <FaChevronLeft
        className="hidden absolute left-[-50px] top-[40%] hover:bg-iOrange dark:hover:bg-white text-xl h-8 w-8 p-2 rounded-full md:flex items-center justify-center 
      duration-150 ease-out"
        onClick={handlePrev}
      />
      <FaChevronRight
        className="hidden absolute right-[-50px] top-[40%] hover:bg-iOrange dark:hover:bg-white text-xl h-8 w-8 p-2 rounded-full md:flex items-center justify-center duration-150 ease-out"
        onClick={handleNext}
      />
      <div className="flex">
        {images.map((img, i) => (
          <img
            src={img}
            key={i}
            style={{
              transform: `translateX(-${100 * currIndex}%)`,
              transition: `all 0.3s ease-out`,
            }}
            onClick={() => setEnlargeImage(true)}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrIndex(i)}
            className={`h-3 w-3 rounded-full mx-2 ${
              currIndex === i ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
