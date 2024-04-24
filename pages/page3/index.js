// React icons
import { MdCancel } from 'react-icons/md';
import { FaDownload } from "react-icons/fa";

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Page3 = () => {
  return ( 
    // box
    <div className='px-6 lg:px-52 py-5 font-cairo'>
      {/* the content */}
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-5 text-black text-md lg:text-xl justify-end'>
        {/* text_2 */}
        <div className='text'>  
          <MdCancel className='text-red-600 hover text-2xl' />
          <span> حل كتاب المهارات الحياتية للصف التاسع </span>
        </div>
        {/* text_1 */}
        <div className='text'>  
          <MdCancel className='text-red-600 hover text-2xl' />
          <span> اسم قسم المادة </span>
        </div>
      </div>

      {/* books box */}
      <div className='w-full h-[60vh] border-2 border-[#01a896] rounded-3xl mt-10 text-4xl text-black p-5
      flex justify-center items-center'> 
        مستعرض الكتاب
      </div>
      {/* download button box */}
      <div className='w-full h-[20vh] bg-[#b5ebf3] flex items-center justify-center gap-10 mt-5'>
        {/* button */}
        <div className='group text-white flex items-center gap-5 bg-[#01a896] p-5 rounded-3xl cursor-pointer border-2
        border-[#01a896] hover:bg-transparent transition duration-300'> 
          <button> Download </button>
          <FaDownload className='group-hover:text-black' />
        </div>
      </div>
    </div>
  );
};

export default Page3;
