//next image
import Image from 'next/image'


const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image 
    src={'/Me.jpeg'}
    width={637}
    height={578}
    alt='HazemNabil'
    className='translate-z-0 w-full h-full rounded-[50%] shadow-2xl
    shadow-red-200 opacity-65'
  
    />
  </div>
};

export default Avatar;
