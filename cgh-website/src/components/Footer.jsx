import { LogoWhite } from "../assets";
import { Link } from 'react-router-dom'; // Import Link if you're using React Router for navigation

const Footer = () => (
    <footer className='bg-primary py-6'>
        <div className='container mx-auto text-white flex flex-col items-center sm:items-start sm:flex-row justify-between'>

            {/* Logo Section */}
            <div className='flex flex-col items-center sm:items-start mb-6 sm:mb-0'>
                <a href="/">
                    <LogoWhite className='h-10' /> {/* Adjust height or any styling as needed */}
                </a>

            </div>

            {/* Middle Section: Nav Links */}
            <div className='flex flex-col items-center sm:items-start mb-6 sm:mb-0'>
                {/*/!* Navigation Links *!/*/}
                {/*<div className='flex flex-col sm:flex-row gap-4 mb-4'>*/}
                {/*    <Link to="/" className='hover:underline'>Home</Link>*/}
                {/*    <Link to="/rooms" className='hover:underline'>Rooms</Link>*/}
                {/*    <Link to="/restaurant" className='hover:underline'>Restaurant</Link>*/}
                {/*    <Link to="/attractions" className='hover:underline'>Nearby Attractions</Link>*/}
                {/*    <Link to="/contact" className='hover:underline'>Contact</Link>*/}
                {/*</div>*/}

                {/* Contact Information */}
                <div className='text-center sm:text-left'>
                    <p>E-mail: <a href="mailto:cityguesthouse2014@gmail.com" className='hover:underline'>cityguesthouse2014@gmail.com</a></p>
                </div>
            </div>

            {/* Copyright Text */}
            <div className='flex flex-col items-center'>
                <p className='text-center'>
                    Copyright &copy; {new Date().getFullYear()} • <strong>City Guest House</strong>
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
