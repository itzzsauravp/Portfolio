import { motion } from "motion/react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
const EnlargedImage = ({ image, setEnlargeImage, handleNext, handlePrev }) => {
  const imageRef = useRef(null);
  const handleEnlargeImageClose = (e) => {
    if (imageRef.current && imageRef.current !== e.target) {
      setEnlargeImage(false);
    }
  };
  return (
    <motion.div
      className="fixed bg-black bg-opacity-85 backdrop-blur-sm w-full top-0 left-0 z-[10]"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={handleEnlargeImageClose}
    >
      <div className="relative flex items-center justify-center h-screen">
        <motion.img
          ref={imageRef}
          src={image}
          alt=""
          className="w-[90%] h-auto relative z-10"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        />
        <FaChevronLeft
          className="hidden absolute bg-white  text-slate-500 left-[7%] top-[50%] transform -translate-y-1/2 hover:bg-iOrange dark:hover:bg-black text-xl p-2 rounded-full md:flex md:text-2xl lg:text-3xl xl:text-4xl items-center justify-center duration-150 ease-out z-10"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
        />
        <FaChevronRight
          className="hidden absolute bg-white text-slate-500 right-[7%] top-[50%] transform -translate-y-1/2 hover:bg-iOrange dark:hover:bg-black text-xl  p-2 rounded-full md:flex md:text-2xl lg:text-3xl xl:text-4xl items-center justify-center duration-150 ease-out z-10"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
        />
      </div>
    </motion.div>
  );
};

export default EnlargedImage;
