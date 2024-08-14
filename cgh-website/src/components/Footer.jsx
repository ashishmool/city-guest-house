import { LogoWhite } from "../assets";

const Footer = () => (
    <footer className='bg-primary py-6'>
        <div className='container mx-auto text-white flex items-center justify-between flex-col sm:flex-row'>

            {/* Logo Section */}
            <div className='flex items-center'>
                <a href="/">
                    <LogoWhite className='h-10' /> {/* Adjust height or any styling as needed */}
                </a>
            </div>

            {/* Copyright Text */}
            <div className='flex flex-col items-center mt-4 sm:mt-0'>
                <p className='text-center'>
                    Copyright &copy; {new Date().getFullYear()} • <strong>City Guest House</strong>
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
