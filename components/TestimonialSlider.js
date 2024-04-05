// testimonial data
const testimonialData = [
  {
    image: 'https://hazem-nabil42.github.io/HazemNabil/t-avt-1.png',
    name: 'Hassna',
    position: 'Customer',
    message:
      'Amazing work and the submition is on time',
  },
  {
    image: 'https://hazem-nabil42.github.io/HazemNabil/t-avt-2.png',
    name: 'Osama',
    position: 'Customer',
    message:
      'Great work and the quality and the performance of the Website is amazing',
  },
  {
    image: 'https://hazem-nabil42.github.io/HazemNabil/t-avt-3.png',
    name: 'Fkaar',
    position: 'Customer',
    message:
      'Good Work :)',
  },
];

// next link
import Link from 'next/link'

// icons
import {
  FaQuoteLeft,
} from 'react-icons/fa'

// next image 
import Image from 'next/image'


// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules 
import { Autoplay, Pagination, Scrollbar, A11y, FreeMode, Navigation } from 'swiper'

import 'swiper/swiper-bundle.min.css';

const TestimonialSlider = () => {
  return (
  <Swiper 
    modules={[Pagination, A11y, FreeMode, Autoplay, Navigation]}
    spaceBetween={10}
    pagination={{clickable: true}}
    navigation={true}
    className='h-[400px]'
>
  
  {
    testimonialData.map((person, index) => {
      return (  
      <SwiperSlide key={index}>
        <div className='flex flex-col items-center md:flex-row
         gap-x-8 h-full px-16'>
          {/* avatar, name, positions */}
          <div className='w-full max-w-[300px] flex flex-col
           xl:justify-center items-center relative mx-auto xl:mx-6'>
            <div className='flex flex-col justify-center text-center'>
              {/* avatar */}
              <div className='mb-2 mx-auto '>
                <Image src={person.image} width={100} height={100} alt=''/>
              </div>
              {/* name */}
              <div className='text-lg'>
                {person.name}
              </div>
              {/* position */}
              <div className='text-[12px] uppercase font-extrabold
               tracking-widest'>{person.position}</div>
            </div>
          </div>
          {/* quote & message */}
          <div className='flex-1 flex flex-col 
           justify-center items-center before:w-[1px] xl:before:bg-white/20
            xl:before:absolute xl:before:left-0 xl:before:h-[200px]
             relative xl:pl-20'>
            {/* quote icon */}
            <div className='mb-4'>
              <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto 
              md:mx-0'/>
            </div>
            {/* message */}
            <div className='xl:text-lg text-center
             md:text-left'>{person.message}</div>
          </div>
        </div>
      </SwiperSlide>
      );
    })
  }
  </Swiper>
  );
};

export default TestimonialSlider;


