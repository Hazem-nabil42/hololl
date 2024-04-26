// next images
import Image from 'next/image'

function Cards2 () {
    return (
    <div className="text-black relative">
        {/* the box */}
        <div className='flex flex-col justify-center items-center min-h-24'>
            {/* title */}
            <div className="absolute -top-9 border-2 border-[#01a896] bg-[#01a896] rounded-3xl text-white 
            py-0 text-md px-2 xl:px-5 font-normal">
                حل الكتاب
            </div>
            {/* pic */}
            <div className='h-full w-fit'>
                <Image 
                src={'https://hazem-nabil42.github.io/hololl/1.jpg'}
                width={200}
                height={200}
                alt='image'
                />
            </div>
            <div className='mt-10 px-1 py-2 xl:p-5 text-center text-black bg-transparent w-full border-t-2 border-blue-300
            font-bold text-md lg:text-xl'>
                حل كامل المهارات الحياتيه
            </div>
        </div>
        {/* under the box */}
    </div>

    );
}

export default Cards2;