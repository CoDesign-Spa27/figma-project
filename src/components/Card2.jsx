import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card2 = () => {
  const [images, setImages] = useState([
    "/Test.svg",  
    "/Test.svg",   
    "/Image1.jpeg",
    "/Image2.jpeg",
    "/Image3.jpeg",
    "/image5.jpeg"
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, newImage]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="h-[50%] w-[100%] bg-[#363C43] rounded-[27px] shadow-lg shadow-black">
      <div className="p-4 flex gap-4">
        <div>
          <img src="/public/QMark.svg" alt="" />
        </div>
        <div className="w-full flex justify-between items-center">
          <div>
            <button
              className="h-[90%] bg-[#171717] px-8 py-3 rounded-2xl text-white text-lg
                                        shadow-inner shadow-black font-medium"
            >
              Gallery
            </button>
          </div>
        

          <div>
            <div className="flex gap-4 px-4">
              <div className="shadow-[6px_7px_5px_1px_#1f1f1fab] rounded-full">
                <label
                  className="px-4 py-3 cursor-pointer rounded-full bg-[#FFFFFF08] text-white font-semibold text-xs
                                flex justify-center items-center gap-1 shadow-inner shadow-[#a7a4a4b5]"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="w-[10px] mb-[1.4px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                  </svg>{" "}
                  ADD IMAGE
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAddImage}
                    style={{ display: `none` }}
                  />
                </label>
              </div>
              <div className="flex gap-3 text-[#6F787C] px-2">
  <div className="rounded-full shadow-[0px_0px_20px_6px_#6a8897]">
    <button
      className="rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3
                shadow-[2px_8px_22px_5px_black] transition-transform duration-300
          active:text-white
                active:bg-gradient-to-br active:from-[#96bee7dc] active:to-transparent"
      onClick={handlePrev}
      disabled={currentIndex === 0}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
      </svg>
    </button>
  </div>
  <div className="rounded-full shadow-[0px_0px_20px_6px_#6a8897]">
    <button
      className="rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3
                shadow-[2px_8px_22px_5px_black] transition-transform duration-300 active:text-white
                active:bg-gradient-to-br active:from-[#96bee7dc] active:to-transparent"
      onClick={handleNext}
      disabled={currentIndex >= images.length - 3}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
      </svg>
    </button>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-2 ml-2.5 ">
        <div className="mt-5 w-[19px]">
          <img src="/public/grid.svg" alt="" />
        </div>
        <div className="relative overflow-hidden h-40 w-full">
          <motion.div
            className="flex gap-6  px-2"
            initial={false}
            animate={{ x: `-${currentIndex * 33.33}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                whileHover={{
                    scale: 1.1,
                    rotate: -2,
                    transition: { duration: 0.3 },
                  }}
                className="h-[150px] w-[170px]   rounded-2xl  
                            hover:opacity-100 opacity-60"
                alt="Gallery Image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card2;