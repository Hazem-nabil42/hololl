import { FaFacebook, FaTwitter, FaSnapchatGhost, FaTiktok, FaInstagram } from "react-icons/fa";

function Footer () {
    return(
        <div className="w-full py-5 px-5 lg:px-10 bg-[#01a896] text-lg lg:text-xl flex justify-around 
            items-center mb-20 xl:mb-0 font-normal text-black mt-28">
            {/* socials */}
            <div className=" flex flex-col gap-3 lg:gap-5 lg:flex-row items-center ">
                <FaInstagram className="hover:text-white cursor-pointer transition duration-300" />
                <FaTwitter className="hover:text-white  cursor-pointer transition duration-300" />
                <FaFacebook  className="hover:text-white cursor-pointer transition duration-300"/>
                <FaSnapchatGhost className="hover:text-white cursor-pointer transition duration-300"/>
                <FaTiktok className="hover:text-white cursor-pointer transition duration-300" />
            </div>

            {/* center text */}
            <div className="text-sm font-semibold lg:text-xl lg:font-normal"> جميع الحقوق محفوظه بدايه ٢٠٢٤ </div>

            {/* links */}
            <div className="">
                <ul className="flex flex-col gap-2 lg:flex-row lg:gap-2 ">
                    <li className="cursor-pointer"> رابط فوتر </li>
                    <li className="cursor-pointer"> رابط فوتر </li>
                    <li className="cursor-pointer"> رابط فوتر </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;