// next images
import Image from 'next/image'

function Cards2 () {
    return (
    <div className="text-black relative">
        {/* the box */}
        <div className='flex justify-center items-center min-h-24'>
            {/* pic */}
            <div className='h-full w-fit'>
                <Image 
                src={'https://hazem-nabil42.github.io/holololl/1.jpg'}
                width={200}
                height={200}
                layout="intrinsic"
                objectFit="cover"
                />
            </div>
            {/* title */}
            <div className="absolute -top-10 border-2 border-[#01a896] bg-[#01a896] rounded-3xl text-white p-2 text-md
            px-5 font-normal">
                حل الكتاب
            </div>
        </div>
        {/* under the box */}
        <div className='mt-10 p-2 text-center text-[rgb(124,165,192)] bg-[#f3fdff] w-full border-t-2 border-blue-300
        font-medium text-xl'>
            حل كامل المهارات الحياتيه
        </div>
    </div>

    );
}

export default Cards2;