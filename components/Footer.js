import { FaFacebook, FaTwitter, FaSnapchatGhost, FaTiktok, FaInstagram } from "react-icons/fa";

function Footer () {
    return(
        <div className="w-full py-5 px-10 bg-[#01a896] text-lg lg:text-xl flex justify-around 
            items-center mb-20 xl:mb-0 font-normal">
            {/* socials */}
            <div className=" flex flex-col gap-3 lg:gap-5 lg:flex-row items-center ">
                <FaInstagram className="hover:text-black cursor-pointer transition duration-300" />
                <FaTwitter className="hover:text-black  cursor-pointer transition duration-300" />
                <FaFacebook  className="hover:text-black cursor-pointer transition duration-300"/>
                <FaSnapchatGhost className="hover:text-black cursor-pointer transition duration-300"/>
                <FaTiktok className="hover:text-black cursor-pointer transition duration-300" />
            </div>

            {/* center text */}
            <div> جميع الحقوق محفوظه بدايه 2024 </div>

            {/* links */}
            <div className="">
                <ul className="flex flex-col gap-0 lg:flex-row lg:gap-5 ">
                    <li> رابط فوتر </li>
                    <li> رابط فوتر </li>
                    <li> رابط فوتر </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;