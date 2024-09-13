import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRoomContext } from '../context/RoomContext';
import { LogoWhite, LogoDark } from '../assets';
import Login from '../pages/features/authentication/Login';
import { FaSignOutAlt, FaKey, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const { resetRoomFilterData } = useRoomContext();
  const [header, setHeader] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const accessToken = localStorage.getItem('accessToken');
  const userEmail = localStorage.getItem('email');
  const userRole = localStorage.getItem('role');
  const isLoggedIn = accessToken !== null;

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const navLinks = userRole === 'Admin' ? [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Nearby Attractions', path: '/attractions' },
  ] : [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Nearby Attractions', path: '/attractions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
      <>
        <header
            className={`fixed z-50 w-full transition-all duration-300 ${
                header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'
            }`}
        >
          <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-y-6 lg:gap-y-0'>
            {/* Logo */}
            <div
                onClick={() => {
                  resetRoomFilterData(); // Reset filters when clicking the logo
                  navigate('/');
                }}
                className='cursor-pointer'
            >
              {header ? (
                  <LogoDark className='w-[160px]' />
              ) : (
                  <LogoWhite className='w-[200px]' />
              )}
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className='lg:hidden flex items-center'>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                    <FaTimes className={`text-3xl ${header ? 'text-primary' : 'text-white'}`} />
                ) : (
                    <FaBars className={`text-3xl ${header ? 'text-primary' : 'text-white'}`} />
                )}
              </button>
            </div>

            {/* Nav for Desktop */}
            <nav
                className={`hidden lg:flex ${
                    header ? 'text-primary' : 'text-white'
                } gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}
            >
              {navLinks.map((link) => (
                  <Link to={link.path} className='transition hover:text-accent' key={link.name}>
                    {link.name}
                  </Link>
              ))}
            </nav>

            {/* User Info or Login Button */}
            <div className='hidden lg:flex ml-4 items-center'>
              {isLoggedIn ? (
                  <div className='flex items-center'>
                <span className={`text-lg font-medium ${header ? 'text-primary' : 'text-gray-400'} mr-3`}>
                  {userEmail}
                </span>
                    <button
                        onClick={handleLogout}
                        className={`flex items-center ${header ? 'text-gray-400 hover:text-primary' : 'text-white hover:text-gray-400'}`}
                    >
                      <FaSignOutAlt className='mr-1' />
                      Logout
                    </button>
                  </div>
              ) : (
                  <button
                      onClick={() => setShowLogin(true)}
                      className={`py-2 px-6 border rounded transition ${header ? 'text-primary border-primary hover:text-accent' : 'text-white border-white hover:text-accent'}`}
                  >
                    <FaKey className='inline-block mr-2' />
                    Login
                  </button>
              )}
            </div>
          </div>

          {/* Mobile Nav Menu */}
          {menuOpen && (
              <nav className={`lg:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4`}>
                <ul className='flex flex-col items-center'>
                  {navLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                            to={link.path}
                            className='block py-2 px-4 text-gray-700 hover:text-primary'
                            onClick={() => {
                              setMenuOpen(false); // Close menu on click
                              resetRoomFilterData(); // Reset filters when navigating
                            }}
                        >
                          {link.name}
                        </Link>
                      </li>
                  ))}
                  <li className='py-2'>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className='flex items-center text-gray-700 hover:text-primary'
                        >
                          <FaSignOutAlt className='mr-1' />
                          Logout
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                              setShowLogin(true);
                              setMenuOpen(false); // Close menu when login is clicked
                            }}
                            className='flex items-center text-gray-700 hover:text-primary'
                        >
                          <FaKey className='mr-1' />
                          Login
                        </button>
                    )}
                  </li>
                </ul>
              </nav>
          )}
        </header>

        {/* Render Login Modal */}
        {showLogin && <Login onClose={() => setShowLogin(false)} />}
      </>
  );
};

export default Header;
