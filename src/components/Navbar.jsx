import { Disclosure } from '@headlessui/react';
import { navigation } from '../utils/data';
import { Link, useLocation } from 'react-router-dom';

import CallIcon from '../assets/icons/call.svg';
import MenuIcon from '../assets/icons/menu-outline.svg';
import CloseIcon from '../assets/icons/close-outline.svg';
import Logo from '../assets/logo.png';

import { useScrollPosition } from '../hooks/useScrollPosition';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const location = useLocation();

  return (
    <Disclosure 
      as="nav"
      className={classNames(
        scrollPosition > 0 ? 'shadow-lg backdrop-filter backdrop-blur-lg bg-white py-2 bg-opacity-80 text-gray-800' : 'py-2 sm:py-6 shadow-none bg-transparent text-white',
        'fixed top-0 z-20 transition duration-300 px-4 sm:px-16 w-full flex items-center',
      )}
    >
      {({ open }) => (
        <>  
            <div className="flex items-center justify-between w-full">
              <Link to="/"><img src={Logo} className="w-12 sm:w-16" alt="CV. Karyatama Agro Cemerlang" /></Link>
              <div className="hidden sm:block">
                <div className="flex space-x-8 items-center">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(location.pathname === item.href ? "border-b-2 border-red-700 font-extrabold" : " hover:text-gray-400 font-semibold", "text-md transition duration-100"
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <a
                href="tel:+62616611987"
                aria-label="call"
                className="hidden sm:flex transition duration-300 rounded-full bg-green-700 p-1 text-white hover:drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 items-center space-x-4 px-6 py-2 justify-between"
              >
                <div className="text-left leading-3">
                  <p className="text-[10px] font-light">Segera Hubungi Kami!</p>
                  <p className="font-bold text-lg">+62616611987</p>
                </div>
                <img src={CallIcon} className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
            <div className="flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-30">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <img src={CloseIcon} className="block h-8 w-8" alt="Menu Icon" aria-hidden="true" />
                ) : (
                  <img src={MenuIcon} className="block h-8 w-8" alt="Close Icon" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          <Disclosure.Panel className="sm:hidden absolute top-0 left-0 h-screen w-screen bg-white">
            <div className="z-30 flex flex-col justify-center items-center h-full">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href ? 'font-bold' : 'font-medium hover:bg-red-700 hover:text-white',
                    'text-gray-800 text-lg border-y w-full text-center py-4 transition duration-150'
                  )}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;
