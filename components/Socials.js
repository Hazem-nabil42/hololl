// Links
import Link from 'next/link'
// icons 
import {
      RiInstagramLine,
    RiFacebookBoxLine,
  RiDribbbleLine,
RiBehanceLine} from 'react-icons/ri' 

// tiktok
import { FaTiktok, FaLinkedinIn, FaGithub  } from "react-icons/fa";

const Socials = () => {
  return (
  <div className='flex flex-row gap-x-5 text-lg justify-center items-center'>
    <Link href={'https://www.instagram.com/_hazemnabil_/'} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={'https://www.facebook.com/profile.php?id=100007341780523'} className='hover:text-accent transition-all duration-300'>
      <RiFacebookBoxLine />
    </Link>
    <Link href={'https://www.tiktok.com/@42_hazem'} className='hover:text-accent transition-all duration-300'>
      <FaTiktok />
    </Link>
    <Link href={'https://www.linkedin.com/in/hazem-nabil-4ab02b265/'} className='hover:text-accent transition-all duration-300'>
      <FaLinkedinIn />  
    </Link>
    <Link href={'https://github.com/Hazem-nabil42'} className='hover:text-accent transition-all duration-300'>
      <FaGithub />
    </Link>
    <Link href={'#'} className='hover:text-accent transition-all duration-300'>
      <RiBehanceLine />
    </Link>
  </div>
  );
};

export default Socials;
