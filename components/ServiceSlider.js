
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx"

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: "I'm Fullstack web developer so that i can a complete websites from scratch bymyself",
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'good taste in desgining to customers also in my services Website, mobileApp, menu, etc...',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'also I can improve your SEO for your website to reach maximum amount of customers and gain amazing profit',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'also I have a great knowlege in copywriting ',
  },
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'also branding to your products for Shopify dropshipping for example in my services',
  },
];


// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules 
import { Autoplay, Pagination, Scrollbar, A11y, FreeMode } from 'swiper'

import 'swiper/swiper-bundle.min.css';

const ServiceSlider = () => {
  return (
  <Swiper 
    modules={[Pagination, A11y, FreeMode, Autoplay]}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }}
    freeMode={true}
    pagination={{clickable: true}}
    className='h-[240px] sm:h-[340px]'
>
  
  {
    serviceData.map((item, index) => {
      return ( 
      <SwiperSlide key={index}>
        <div className='bg-[rgba(65,47,123,0.15)] h-max
         rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 
         group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
         transition-all duration-300'>
          {/* icon */}
          <div className='text-4xl text-accent mb-4'>{item.icon}</div>
          {/* title & desc */}
          <div className="mb-8">
            <div className="mb-2 text-lg">{item.title}</div>
            <p className="p max-w-[350px] leading-normal">{item.description}</p>
          </div>
          {/* arrow */}
          <div className='text-3xl'>
            <RxArrowTopRight className="group-hover:rotate-45
             group-hover:text-accent transition-all duration-300"/>
          </div>
        </div>
      </SwiperSlide>
      );
    })
  }
  </Swiper>
  );
};

export default ServiceSlider;
