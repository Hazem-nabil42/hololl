import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

//components
import CardsSlider from '../components/cardsSlider';

// Icons
import { AiOutlineBars } from 'react-icons/ai';
import { MdCancel } from "react-icons/md";

const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  function generateCardGrid(numColumns, numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      const cardIndex = i; // Remember the index for this card
      cards.push(
        <motion.div
          key={i}
          className={`col-span-1 card`}
          whileHover={{ translateY: -10, transition: { delay: 0.2 } }}
          onClick={() => setSelectedCard(cardIndex)} // Set the selected card index on click
        >
          <CardsSlider />
        </motion.div>
      );
    }
    return cards;
  }

  // Description data for each card
  const descriptions = [
    'Description for card 1',
    'Description for card 2',
    'Description for card 3',
    'Description for card 4',
    'Description for card 5',
    'Description for card 6',
    'Description for card 7',
    'Description for card 8',
  ];

  return (
<div className="relative">
      {/* Semi-transparent overlay */}
      {selectedCard !== null && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      <div className="px-5 lg:px-40">
        <div className="w-full min-h-30 p-5 mx-0 my-4 font-semibold text-xl flex items-center justify-between">
          {/* num of sections */}
          <div className="p-3 bg-transparent text-lg font-bold text-black flex gap-2 items-center">
            <div className="border-2 border-green-600 p-2 flex items-center gap-5 rounded-xl px-3">
              <span className="text-white bg-[#01a896] p-2 rounded-lg">2</span>
              <span>1</span>
            </div>
            :الفصل
          </div>

          {/* header text */}
          <div className="flex items-center gap-5 text-black font-normal cursor-pointer">
            الحلول و الملفات التعليمية
            <AiOutlineBars />
          </div>
        </div>

        {/* cards box */}
        <div className="px-10 mb-10">
          {/* slider card */}
          <div className="grid grid-cols-2 gap-10 xl:grid-cols-4">
            {/* First row */}
            {generateCardGrid(4, 4)}
            {/* Second row */}
            {generateCardGrid(4, 2)}
          </div>
        </div>
      </div>

      {/* Description */}
      <AnimatePresence>
        {selectedCard !== null && (
          <motion.div
            key={selectedCard} // Use key to ensure proper animation when switching cards
            className="fixed inset-0 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* the box and its content */}
            <div className="p-10 bg-[rgb(233,233,233)] rounded-3xl text-black border-2 border-blue-500">
              {/* cancel button */}
              <button className='hover:text-red-600 transition duration-200 text-xl' 
                onClick={() => setSelectedCard(null)}>
                  <MdCancel /> 
              </button>
              {/* the content */}
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              {/* <p>{descriptions[selectedCard]}</p> */}
              <div>
                <ul className='flex gap-5 my-5'>
                  <li className='box'> اللغة العربية </li>
                  <li className='box'> اللغة العربية </li>
                  <li className='box'> اللغة العربية </li>
                  <li className='box'> اللغة العربية </li>
                  <li className='box'> اللغة العربية </li>
                </ul>
                <ul className='flex gap-5'>
                  <li className='box'> اللغة العربية </li>
                  <li className='box'> اللغة العربية </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
