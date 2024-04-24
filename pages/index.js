import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import CardsSlider from '../components/cardsSlider';

// Icons
import { AiOutlineBars } from 'react-icons/ai';

const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Function to handle card selection
  const handleCardClick = (cardIndex) => {
    setSelectedCard((prevSelected) => (prevSelected === cardIndex ? null : cardIndex));
  };

// Function to generate card grid
const generateCardGrid = (numColumns, numCards) => {
  const cards = [];
  const columnWidth = 100 / numColumns; // Calculate column width
  const descriptionWidth = columnWidth * numColumns; // Calculate description width based on number of columns
  for (let i = 0; i < numCards; i++) {
    const cardIndex = i;
    const leftPosition = columnWidth+10 * (i % numColumns); // Calculate left position based on column width and index
    cards.push(
      <motion.div
        key={i}
        onClick={() => handleCardClick(cardIndex)}
        className={`col-span-1 card relative`}
        whileHover={{ translateY: -10, transition: { delay: 0.2 } }}
      >
        <CardsSlider />
        {/* Triangle and description */}
        <AnimatePresence>
          {selectedCard === cardIndex && (
            <>
              <motion.div 
                key="triangle"
                className='border-solid border-t-[#fab03c] border-t-[40px] border-x-transparent border-x-[25px] border-b-0 absolute -bottom-10'
                initial={{ opacity: 0, translateY: -20, left: `${leftPosition}%` }}
                animate={{ opacity: 1, translateY: 0, left: `${leftPosition}%` }}
                exit={{ opacity: 0 }}
              />
              <motion.div 
                key="description"
                className='bg-white text-black p-2 rounded-3xl shadow-md absolute bottom-[-120px] z-50 w-full'
                initial={{ opacity: 0, translateY: -20, width: '100%', left: 0 }} // Set initial width to 100% and left position to 0
                animate={{ opacity: 1, translateY: 0, width: '100%', left: 0 }} // Animate width change and left position
                exit={{ opacity: 0 }}
              >
                <div className='border-2 border-blue-400 p-3 text-center text-lg rounded-full'>
                  اللغه العربيه
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
  return cards;
};




  return (
    <div className="relative font-cairo">
      <div className="px-5 lg:px-40">
        <div className="w-full min-h-30 lg:p-5 mx-0 my-4 font-semibold text-sm lg:text-lg flex items-center justify-between">
          {/* Num of sections */}
          <div className="p-3 bg-transparent font-bold text-black flex gap-2 items-center">
            <div className="border-2 border-green-600 p-2 flex items-center gap-5 rounded-xl px-3">
              <span className="text-white bg-[#01a896] p-2 rounded-lg">2</span>
              <span>:الفصل</span>
            </div>
          </div>

          {/* Header text */}
          <div className="flex items-center gap-0 text-sm lg:text-xl lg:gap-5 text-black cursor-pointer">
            الحلول و الملفات التعليمية
            <AiOutlineBars />
          </div>
        </div>

        {/* Cards box */}
        <div className="px-2 lg:px-10 mb-10">
          {/* Slider card */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
            {/* Generate card grid */}
            {generateCardGrid(4, 8)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
