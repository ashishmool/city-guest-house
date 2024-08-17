import { useRoomContext } from '../context/RoomContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LogoWhite, LogoDark } from '../assets';
import Login from '../pages/Authentication/Login'; // Import your Login component

const Header = () => {
  const { resetRoomFilterData } = useRoomContext();
  const [header, setHeader] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Updated navLinks to include correct paths
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Nearby Attractions', path: '/attractions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
      <>
        <header
            className={`fixed z-50 w-full transition-all duration-300 
          ${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'}`}
        >
          <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-y-6 lg:gap-y-0'>
            {/* Logo */}
            <Link to="/" onClick={resetRoomFilterData}>
              {header ? (
                  <LogoDark className='w-[160px]' />
              ) : (
                  <LogoWhite className='w-[200px]' />
              )}
            </Link>

            {/* Nav */}
            <nav
                className={`${
                    header ? 'text-primary' : 'text-white'
                } flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}
            >
              {navLinks.map((link) => (
                  <Link to={link.path} className='transition hover:text-accent' key={link.name}>
                    {link.name}
                  </Link>
              ))}
            </nav>

            {/* Login Button */}
            <button
                onClick={() => setShowLogin(true)}
                className={`${
                    header ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
                } ml-4 py-2 px-6 border rounded transition`}
            >
              Login
            </button>
          </div>
        </header>

        {/* Render Login Modal */}
        {showLogin && <Login onClose={() => setShowLogin(false)} />}
      </>
  );
};

export default Header;
