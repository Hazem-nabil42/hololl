// icons
import { FaSearch, FaUser } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { HiSquares2X2 } from "react-icons/hi2";
import { MdCancel } from "react-icons/md";
// framer motion
import { motion, AnimatePresence } from 'framer-motion';

// useState React
import React, { useState } from 'react';

// next images
import Image from 'next/image'

function Header( { isOpen, onOverlayToggle } ) {
    //  the input field for mobiles
    const [isInputVisible, setIsInputVisible] = useState(false);

    const toggleInputVisibility = () => {
        setIsInputVisible(!isInputVisible);
    };
    //  toggle for the dropdown box
    const toggleDropdown = () => {
        onOverlayToggle(); // Toggle overlay visibility
    };

    return (
        <header>
            {/* Semi-transparent overlay */}

			<nav className="flex justify-between gap-10 items-center px-20 py-4 bg-gradient-to-l from-[#c8f9e6]
				to-[#a9e5fd] sticky">
				{/* user and details */}
				<div className="flex items-center gap-5" >
					<FaUser className='transition duration-300 hover:text-green-600' />
					<div onClick={toggleDropdown} className="bg-[#01a896] text-xl text-white flex justify-between items-center p-5 gap-7 
                        rounded-2xl hover:bg-transparent hover:text-[#01a896] border-2 border-[#01a896] transition
                        duration-300"> 
						المحتويات
						<HiSquares2X2 className='cursor-pointer hover:animate-pulse' />
						<AnimatePresence>
                            {isOpen && (
                                <motion.div
                                initial={{ opacity: 0, y: "50%" }} // Start from the middle of the page
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: "50%" }} // Exit to the middle of the page
                                transition={{ duration: 0.3 }}
                                className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center z-50" // Centering the box
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative w-full max-w-md bg-white border border-gray-300 shadow-md p-4 text-black text-2xl rounded-2xl"
                                    >
                                        {/* Close button */}
                                        <div className="absolute top-3 left-3 text-xl">
                                        <MdCancel className="absolute top-0 text-xl text-gray-600 hover:text-red-600 transition duration-300 cursor-pointer" />
                                        </div>
                                        <div className="text-center">
                                        <span> المحتويات </span>
                                        </div>
                                        <hr />

                                        <div className="text-right">
                                        <ul>
                                            <li> الملفات التعليمية </li>
                                            <li> الملفات التعليمية </li>
                                            <li> الملفات التعليمية </li>
                                            <li> الملفات التعليمية </li>
                                        </ul>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                            </AnimatePresence>
					</div>
                    {/* Search icon */}
                    <div onClick={toggleInputVisibility} className="lg:hidden hover:text-blue-400 transition duration-300 text-black text-xl cursor-pointer">
                        <FaSearch />
                    </div>		
                    {/* Animated input field */}

                </div>
				{/* search */}
				<div className="hidden lg:flex gap-5 items-center justify-center text-2xl bg-white p-3 rounded-2xl">
					<FaSearch className='hover:text-blue-400 transition duration-300 text-black' />
					<input type="text" className="rounded-md text-right px-5 border-0 text-black
					text-lg" placeholder="ابحث هنا" />
				</div>
                
				{/* logo */}
				<Image src={'https://hazem-nabil42.github.io/holololl/logo.png'} width={130} height={130} />
			</nav>
            <motion.input
                    initial={{ width: 0, opacity: 0 }} // Initial styles
                    animate={{ width: isInputVisible ? '100%' : 0, opacity: isInputVisible ? 1 : 0 }} // Animation styles
                    transition={{ duration: 0.3 }} // Animation duration
                    className="lg:hidden rounded-xl px-5 border-2 text-black text-lg text-center border-blue-400 h-16"
                    placeholder="ابحث هنا"
            />		
		</header>
    );
}

export default Header;
