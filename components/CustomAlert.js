
import { motion } from 'framer-motion';

import { FcOk } from "react-icons/fc";

// variants
import { fadeIn } from '../variants'
const CustomAlert = ({ message }) => {

return (
    <motion.div
        className="alert bg-white text-black border-2 border-red-500 rounded-2xl h-fit py-5 w-fit px-10
        shadow-2xl shadow-green-600 font-bold tracking-wider text-left flex justify-center items-center gap-10"
        variants={fadeIn('down', 0.6)} 
        initial='hidden'
        animate='show'
        exit='hidden'
    >
        <FcOk className='text-4xl'/>
        {message}
    </motion.div>
);
};

export default CustomAlert;
