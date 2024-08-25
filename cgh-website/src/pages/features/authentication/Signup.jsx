import { useState } from 'react';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import axios from 'axios'; // Import axios for HTTP requests

const Signup = ({ onClose }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        setIsLoading(true);

        try {
            // Signup API request
            const signupResponse = await axios.post('http://localhost:8080/system-user/save', {
                firstName,
                lastName,
                email,
                password
            });

            if (signupResponse.status === 200) {
                toast.success('Signup successful! Logging in...');

                // Login with newly created credentials
                const loginResponse = await axios.post('http://localhost:8080/authenticate', {
                    email,
                    password
                });

                const userData = loginResponse?.data?.data;
                localStorage.setItem("accessToken", userData?.token);
                localStorage.setItem("userId", userData?.userId);
                localStorage.setItem("email", userData?.email);
                localStorage.setItem("role", userData?.role);

                // Redirect after successful login
                if (userData?.role === "Customer") {
                    window.location.href = '/'; // Redirect to home page
                } else if (userData?.role === "Admin") {
                    window.location.href = '/dashboard'; // Redirect to admin dashboard
                }

                onClose(); // Close modal on successful login
            }
        } catch (error) {
            toast.error('Signup or login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-40'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-2xl font-bold text-gray-900'>Sign Up</h2>
                    <button onClick={onClose} className='text-gray-600 hover:text-gray-900'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSignup}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-medium mb-1'>First Name</label>
                        <input
                            type='text'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className='w-full border border-gray-300 rounded px-3 py-2 text-gray-900 bg-gray-100'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-medium mb-1'>Last Name</label>
                        <input
                            type='text'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className='w-full border border-gray-300 rounded px-3 py-2 text-gray-900 bg-gray-100'
                            required
                        />
                    </div>
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
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-medium mb-1'>Confirm Password</label>
                        <input
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='w-full border border-gray-300 rounded px-3 py-2 text-gray-900 bg-gray-100'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-primary text-white font-bold py-3 px-4 rounded w-full'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
