import { useEffect, useState } from 'react';
import { fetchBookingsByUser } from '../services/bookingService';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = 1; // Replace with actual user ID if available

    useEffect(() => {
        const fetchUserBookings = async () => {
            try {
                const data = await fetchBookingsByUser(userId);
                setBookings(data);
            } catch (err) {
                setError('Failed to fetch bookings.');
                console.error('Error fetching bookings:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserBookings();
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <section className='container mx-auto py-24'>
            <h1 className='text-3xl font-bold mb-8'>Your Bookings</h1>
            <div className='overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-100'>
                    <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Room</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Check-In</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Check-Out</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Adults</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Kids</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Total Amount</th>
                    </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td className='px-6 py-4 whitespace-nowrap'>{booking.room.name}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{new Date(booking.checkIn).toLocaleDateString()}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{new Date(booking.checkOut).toLocaleDateString()}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{booking.noAdults}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{booking.noKids}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>${booking.totalAmount.toFixed(2)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyBookings;
