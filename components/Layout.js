import {Sora} from '@next/font/google'
import { motion } from 'framer-motion'
import React, { useState } from 'react'; // Import useState
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // State for isOpen

  const handleOverlayToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable}  font-sora relative`}>
        <div className={isOpen ? "relative opacity-1 z-50" : ""}>
          <Header isOpen={isOpen} onOverlayToggle={handleOverlayToggle} />
        </div>
      {/* Render Nav, Footer, and children conditionally */}
      <div className={isOpen ? "bg-transparent opacity-25 z-0" : ""}>
      <Nav />
      {children}
      <Footer />
    </div>
    </div>
  );
};

export default Layout;