import { useState } from 'react';
import axios from 'axios';
import ResetPassword from './ResetPassword'; // Import ResetPassword component
import Signup from './Signup'; // Import Signup component
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post("http://localhost:8080/authenticate", {
                email,
                password
            });

            const userData = response?.data?.data;
            localStorage.setItem("accessToken", userData?.token);
            localStorage.setItem("userId", userData?.userId);
            localStorage.setItem("email", userData?.email);
            localStorage.setItem("role", userData?.role);

            // Redirecting after successful login
            if (userData?.role === "Customer") {
                navigate('/'); // Redirect to home page
            } else if (userData?.role === "Admin") {
                navigate('/dashboard/home'); // Redirect to admin dashboard
            }
            handleClose(); // Close the modal
        } catch (error) {
            console.error("Authentication Failed!", error);
            // Optionally, handle the error with a user notification
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = () => {
        setShowResetPassword(false);
        setShowSignup(false);
        if (onClose) onClose(); // Call onClose prop to close the modal
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-40'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
                {/* Modal Title and Close Button */}
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-2xl font-bold text-gray-900'>
                        {showResetPassword ? 'Reset Password' : showSignup ? 'Sign Up' : 'Login'}
                    </h2>
                    <button onClick={handleClose} className='text-gray-600 hover:text-gray-900'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                        </svg>
                    </button>
                </div>

                {/* Conditional Rendering */}
                {!showResetPassword && !showSignup && (
                    <form onSubmit={handleLogin}>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-medium mb-1'>Email</label>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full border border-gray-300 rounded px-3 py-2 text-gray-900 bg-gray-100'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-medium mb-1'>Password</label>
                            <input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full border border-gray-300 rounded px-3 py-2 text-gray-900 bg-gray-100'
                                required
                            />
                        </div>
                        <button
                            type='submit'
                            className='bg-primary text-white font-bold py-3 px-4 rounded w-full'
                            disabled={isLoading}
                        >
                            {isLoading ? 'Loading...' : 'Login'}
                        </button>
                        <div className='mt-4 text-sm text-gray-600'>
                            <button
                                type='button'
                                onClick={() => setShowResetPassword(true)}
                                className='hover:text-primary'
                            >
                                Trouble logging in? Recover Password
                            </button>
                            <button
                                type='button'
                                onClick={() => setShowSignup(true)}
                                className='hover:text-primary'
                            >
                                New to the System? Register Here
                            </button>
                        </div>
                    </form>
                )}

                {showResetPassword && (
                    <ResetPassword onClose={handleClose} />
                )}

                {showSignup && (
                    <Signup onClose={handleClose} />
                )}
            </div>
        </div>
    );
};

export default Login;
