import { useState } from 'react';

const ResetPassword = ({ onClose }) => {
    const [email, setEmail] = useState('');

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Add reset password logic here
        console.log('Reset Password:', { email });
        onClose(); // Close modal on successful password reset
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-40'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-2xl font-bold text-gray-900'>Reset Password</h2>
                    <button onClick={onClose} className='text-gray-600 hover:text-gray-900'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleResetPassword}>
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
                    <button
                        type='submit'
                        className='bg-primary text-white font-bold py-3 px-4 rounded w-full'
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
