import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardsSlider from '../components/cardsSlider';


const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [leftPosition, setLeftPosition] = useState(0);
  const [descriptionVisibility, setDescriptionVisibility] = useState({
    0: false,
    1: false,
    2: false,
    3: false
  });

  const handleCardClick = (cardIndex) => {
    if (selectedCard === cardIndex) {
      // If the same card is clicked again, reset selectedCard to null
      setSelectedCard(null);
    } else {
      setSelectedCard(cardIndex);
    }
    setLeftPosition(cardIndex + 1 * 25);
  };

  const toggleDescriptionVisibility = (cardIndex) => {
    const isMobile = window.innerWidth < 1224;
    

    if ((cardIndex === 0 || cardIndex === 1) && isMobile) {
      // first time
      if (selectedCard === null){
        setDescriptionVisibility({
          ...descriptionVisibility,
          0: !descriptionVisibility[0],
          1: false,
        });
      }
      // if the adjacent card appears
      else if (selectedCard === 0 || selectedCard === 1){
        setDescriptionVisibility({
          ...descriptionVisibility,
          0: selectedCard === cardIndex ? !descriptionVisibility[0] : descriptionVisibility[0],
          1: false,
        });
      }
      // if any neighbour card appear
      // if any neighbour card appear
      else if (selectedCard === 2 || selectedCard === 3) {
        setDescriptionVisibility({
          ...descriptionVisibility,
          0: !descriptionVisibility[0], // Hide description[1]
          1: !descriptionVisibility[1], // Hide description[0]
        });
      }
    } 
    else if ((cardIndex === 2 || cardIndex === 3) && isMobile) {
      if (selectedCard === null){
        setDescriptionVisibility({
          ...descriptionVisibility,
          0: false,
          1: !descriptionVisibility[2] 
        });
      }
      else if (selectedCard === 2 || selectedCard === 3) {
        setDescriptionVisibility({
          ...descriptionVisibility,
          0: false,
          1: selectedCard === cardIndex ? !descriptionVisibility[1] : descriptionVisibility[1] 
        });
      }
      // if any neighbour card appear
      else if (selectedCard === 0 || selectedCard === 1) {
        setDescriptionVisibility({
          ...descriptionVisibility,
          0: !descriptionVisibility[0], // Hide description[1]
          1: !descriptionVisibility[1], // Hide description[0]
        });
      }
    } 
    else if (!isMobile) {
      if (selectedCard === null){
        setDescriptionVisibility({
          ...descriptionVisibility,
          2: !descriptionVisibility[2] 
        });
      }
      else  {
        setDescriptionVisibility({
          ...descriptionVisibility,
          2: selectedCard === cardIndex ? !descriptionVisibility[2] : descriptionVisibility[2] 
        });
      }
    }
  };

  return (
    <div className="relative font-cairo">
      <div className="px-5 lg:px-40">
        {/* Content */}
        <div className="w-full min-h-30 lg:p-5 mx-0 my-4 font-semibold text-sm lg:text-lg flex items-center justify-between">
          {/* Num of sections */}
          <div className="p-3 bg-transparent text-black flex gap-2 items-center">
            <div className="p-2 flex items-center gap-5 rounded-xl px-3 ">
              <div className='border-2 border-gray-400 py-4 px-5 rounded-xl text-3xl font-bold'>
                <span className="text-white bg-[#01a896] px-2 rounded-lg">2</span>
                <span className="text-black font-bold bg-transparent p-2 rounded-lg">1</span>
              </div>
              <span className='text-lg xl:text-xl'>الفصل</span>
            </div>
          </div>

          {/* Header text */}
          <div className="flex items-center gap-2 text-lg lg:text-xl lg:gap-5 text-black cursor-pointer">
            الحلول و الملفات التعليمية
          </div>
        </div>

        {/* Cards box */}
        <div className="px-2 lg:px-7 mb-10">
          {/* Slider card */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
            {/* first 2 cards */}
              {[0, 1].map((index) => (
              <motion.div 
                key={index}
                onClick={() => {
                  handleCardClick(index);
                  toggleDescriptionVisibility(index);
                }}
                className="col-span-1 card relative"
              >
                <CardsSlider />
                {/* Triangle and description */}
                <AnimatePresence>
                  {selectedCard === index && (
                    <motion.div 
                      key="triangle"
                      className='border-solid border-t-[#fab03c] border-t-[40px] border-x-transparent border-x-[25px] border-b-0 absolute -bottom-10'
                      initial={{ opacity: 0, translateY: -20, left: `${leftPosition}%` }}
                      animate={{ opacity: 1, translateY: 0, left: `${leftPosition}%` }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
              ))}
            {/* Descriptions 1 */}
            <AnimatePresence>
            {descriptionVisibility[0] && (
              <motion.div
                className="block col-span-2 xl:hidden bg-slate-100 text-black text-lg border-2 border-blue-400 p-5 rounded-3xl text-right pl-10 my-10"
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0 }}
                key="description2"
              >
                <div className='grid grid-cols-3 gap-5 text-right' >
                  <a href='#' className='border-2 border-gray-500 p-2 rounded-2xl text-center bg-white'>العلوم</a>
                  <a href='#' className='border-2 border-gray-500 p-2 rounded-2xl text-center bg-white'>اللغة الانجليزية</a>
                  <a href='#' className='border-2 border-gray-500 p-2 rounded-2xl text-center bg-white'>اللغة العربية</a>
                  <a href='#' className='border-2 border-gray-500 p-2 rounded-2xl text-center bg-white'>اسلامية</a>
                    <a href='#' className='border-2 border-gray-500 p-2 rounded-2xl text-center bg-white'>اجتماعيات</a>
                  <a href='#' className='border-2 border-gray-500 p-2 rounded-2xl text-center bg-white'>الرياضيات</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
              {/* second 2 cards */}
              {[2, 3].map((index) => (
              <motion.div 
                key={index}
                onClick={() => {
                  handleCardClick(index);
                  toggleDescriptionVisibility(index);
                }}
                className="col-span-1 card relative"
              >
                <CardsSlider />
                {/* Triangle and description */}
                <AnimatePresence>
                  {selectedCard === index && (
                    <motion.div 
                      key="triangle"
                      className='border-solid border-t-[#fab03c] border-t-[40px] border-x-transparent border-x-[25px] border-b-0 absolute -bottom-10'
                      initial={{ opacity: 0, translateY: -20, left: `${leftPosition}%` }}
                      animate={{ opacity: 1, translateY: 0, left: `${leftPosition}%` }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
              ))}
            </div>
          </div>
          {/* Descriptions 2 and 3 */}
          <AnimatePresence>
            {descriptionVisibility[1] && (
              <motion.div
                className="block col-span-2 xl:hidden bg-slate-100 text-black text-lg border-2 border-blue-400 p-5 rounded-3xl text-right pl-10 my-10"
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0 }}
                key="description2"
              >
                <div className='grid grid-cols-3 gap-5 text-right' >
                  <a href='#' className='border-2 border-gray-500 p-2 rounded-2xl text-center bg-white'>العلوم</a>
                  <a href='#' className='border-2 border-gray-500 p-2 rounded-2xl text-center bg-white'>اللغة الانجليزية</a>
                  <a href='#' className='border-2 border-gray-500 p-2 rounded-2xl text-center bg-white'>اللغة العربية</a>
                  <a href='#' className='border-2 border-gray-500 p-2 rounded-2xl text-center bg-white'>اسلامية</a>
                    <a href='#' className='border-2 border-gray-500 p-2 rounded-2xl text-center bg-white'>اجتماعيات</a>
                  <a href='#' className='border-2 border-gray-500 p-2 rounded-2xl text-center bg-white'>الرياضيات</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Descriprion 3 */}
          <AnimatePresence>
          {descriptionVisibility[2] && (
            <motion.div
              className="hidden xl:block xl:col-span-4 bg-slate-100 text-black text-2xl border-2 border-blue-400 
              p-5 rounded-3xl text-right pl-40 my-10"
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0 }}
              key="description2"
            >
              <div className='grid grid-cols-5 gap-5 text-right' >
                <a href='#' className='border-2 border-gray-500 p-3 rounded-2xl text-center bg-white'>اجتماعيات</a>
                <a href='#' className='border-2 border-gray-500 p-3 rounded-2xl text-center bg-white'>الرياضيات</a>
                <a href='#' className='border-2 border-gray-500 p-3 rounded-2xl text-center bg-white'>العلوم</a>
                <a href='#' className='border-2 border-gray-500 p-3 rounded-2xl text-center bg-white'>اللغة الانجليزية</a>
                <a href='#' className='border-2 border-gray-500 p-3 rounded-2xl text-center bg-white'>اللغة العربية</a>
                <a href='#' className='border-2 border-gray-500 p-3 rounded-2xl text-center bg-white'>اسلامية</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
    </div>
  );
};

export default Home;
