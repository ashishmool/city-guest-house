import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const NewPassword = ({ onClose }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const checkToken = () => {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');

            if (!token) {
                toast.error('Invalid or missing reset token.');
                navigate('/reset-password'); // Redirect to reset-password page
            }
        };

        checkToken();
    }, [navigate]);

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        setLoading(true);

        try {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');

            if (!token) {
                toast.error('Invalid reset token.');
                navigate('/reset-password'); // Redirect to reset-password page
                return;
            }

            const response = await axios.post('http://54.253.164.255:8080/system-user/new-password', {
                token,
                newPassword: password,
            });

            if (response.status === 200) {
                toast.success('Password reset successful!');
                setTimeout(() => {
                    handleClose(); // Close the modal and navigate to home
                }, 2000); // Delay to show toast before redirecting
            } else {
                toast.error('Password reset failed. Please try again.');
            }
        } catch (error) {
            toast.error('Error resetting password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        navigate('/'); // Navigate to home page
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-40'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-2xl font-bold text-gray-900'>Reset Password</h2>
                    <button onClick={handleClose} className='text-gray-600 hover:text-gray-900'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleResetPassword}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-medium mb-1'>New Password</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full border border-gray-300 rounded px-3 py-2 text-gray-900 bg-gray-100'
                            required
                            minLength={8}
                            maxLength={16}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-medium mb-1'>Confirm New Password</label>
                        <input
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='w-full border border-gray-300 rounded px-3 py-2 text-gray-900 bg-gray-100'
                            required
                            minLength={8}
                            maxLength={16}
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-primary text-white font-bold py-3 px-4 rounded w-full'
                        disabled={loading}
                    >
                        {loading ? 'Resetting...' : 'Reset Password'}
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default NewPassword;
