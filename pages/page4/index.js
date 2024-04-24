import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// icons 
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";

// components
import Cards2 from '../../components/Cards2'


const Page4 = () => {

  const [selectedCard, setSelectedCard] = useState(null);

  function generateCardGrid(numColumns, numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      const cardIndex = i; // Remember the index for this card
      cards.push(
        <motion.div
          key={i}
          className={`col-span-1 card2`}
          whileHover={{ translateY: -10, transition: { delay: 0.2 } }}
          onClick={() => setSelectedCard(cardIndex)} // Set the selected card index on click
        >
          <Cards2 />
        </motion.div>
      );
    }
    return cards;
  }

  return (
    <div className='px-6 lg:px-52 py-5 font-cairo'>
      {/* the content */}
      <div className='flex gap-5 text-black text-xl justify-between lg:px-16'>
        {/* text_2 */}
        <div className='text'>  
          <FaFilter />
          <span> فلتر </span>
        </div>
        {/* text_1 */}
        <div className='text'>  
          <IoCloseCircleSharp className='text-red-600 hover' />
          <span> اسم قسم المادة </span>
        </div>
      </div>

      {/* cards box */}
        <div className=" lg:px-10 my-10">
          {/* slider card */}
          <div className="grid grid-cols-2 gap-10 xl:grid-cols-4">
            {/* First row */}
            {generateCardGrid(4, 4)}
            {generateCardGrid(2, 2)}
          </div>
        </div>
    </div>
  );
};

export default Page4;
