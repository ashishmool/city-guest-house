import { useState } from 'react';
import { toast } from 'react-toastify'; // Import toast from react-toastify


const Signup = ({ onClose }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/system-user/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email, password }),
            });

            if (response.ok) {
                toast.success('Signup successful!');
                onClose(); // Close modal on successful signup
            } else {
                const errorData = await response.json();
                toast.error(`Signup error: ${errorData.message}`);
            }
        } catch (error) {
            toast.error('Signup failed. Please try again.');
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
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
