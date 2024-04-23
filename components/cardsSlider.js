// next image
import Image from 'next/image'

// import next link
import Link from 'next/link'

function CardsSlider() {
  
  return (
    <div>
      <Link href="#">
          <div className='group'>
            {/* title */}
            <span> اسم القسم </span>
          </div>
          {/* pic */}
          <div className='h-full w-full my-3 flex justify-center items-center'>
            <Image 
              src={'https://hazem-nabil42.github.io/holololl/1.png'}
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