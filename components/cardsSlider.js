import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

function CardsSlider() {
  const [selected, setSelected] = useState(false);

  function toggle() {
    setSelected(!selected);
  }

  return (
    <div onClick={toggle} className=''>
      <Link href='#'>
        <div className='group font-bold tracking-wide text-black text-xl xl:text-3xl'>
          {/* title */}
          <span> اسم القسم </span>
        </div>
        {/* pic */}
        <div className='h-full w-full my-5 flex justify-center items-center'>
          <Image 
            src={'https://hazem-nabil42.github.io/hololl/1.png'}
            width={200}
            height={200}
            layout="intrinsic"
            objectFit="cover"
          />
        </div>
      </Link>
    </div>   
  );
}

export default CardsSlider;
