import '../styles/globals.css';


//components
import Layout from '../components/Layout'; //Layout that has the header and nav and the leftImage
import Transition from '../components/Transition';

//router
import { useRouter } from "next/router"

//framer motion
import { AnimatePresence, motion } from 'framer-motion'; 

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout className='body'>
      <AnimatePresence mode='wait'>
      <motion.div key={router.route} className='h-full'> {/* motion framer your animation appears for the routing pages */}
        <Transition />  {/* Transition has the delay time for the motion animation also has the layout of the loading screen  */}
        <Component {...pageProps} />    {/* Here is the component EX: Home, about and its context*/}
      </motion.div>
      </AnimatePresence>
    </Layout>

)}


export default MyApp;
