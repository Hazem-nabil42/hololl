// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'page3', path: '/page3', icon: <HiRectangleGroup /> },
  { name: 'page4', path: '/page4', icon: <HiViewColumns /> },
];

//importing link
import Link from 'next/link'

//importing router
import {useRouter} from 'next/router'

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname; //finding the current path in the browser EX: /about

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%]
    z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      <div className='flex w-full xl:flex-col items-center justify-between 
      xl:justify-center gap-y-10 px-10 md:px-40 xl:px-0 h-[80px] xl:h-max
      py-8 bg-gray-800 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full
      '>
        {navData.map((link, index) => {
          return (
          <Link 
            key={index}
            className={`${link.path === pathname && 'text-[#01a896]'} 
            relative flex items-center group hover:text-[#3b857d]
            transition-all duration-300`}
            href={link.path}>
            {/* tooltip */}
            <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                <div className='text-[12px] capitalize loading-none font-semibold'>{link.name}</div>
                {/* Triangle */}
                <div className='border-solid border-l-blue-400 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
              </div>
            </div>

            {/* icon */}
            <div>{link.icon}</div>
          </Link>
          )
        })}
      </div>
    </nav>
  );
};

export default Nav;
