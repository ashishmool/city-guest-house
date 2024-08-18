const BASE_URL = 'http://localhost:8080'; // Adjust if necessary

export const addBooking = async (bookingData) => {
    try {
        // Convert dates to the format expected by the backend (yyyy-MM-dd)
        const formattedBookingData = {
            ...bookingData,
            checkIn: bookingData.checkIn.toISOString().split('T')[0],
            checkOut: bookingData.checkOut.toISOString().split('T')[0],
            roomId: Number(bookingData.roomId), // Ensure ID is numeric
            userId: Number(bookingData.userId)  // Ensure ID is numeric
        };

        const response = await fetch(`${BASE_URL}/bookings/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formattedBookingData),
        });

        if (!response.ok) {
            throw new Error('Failed to add booking');
        }

        return await response.json();
    } catch (error) {
        console.error('Error adding booking:', error);
        throw error;
    }
};

export const fetchBookingsByUser = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/bookings/byUserId/${userId}`);

        if (!response.ok) {
            throw new Error('Failed to fetch bookings');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error;
    }
};

// In your booking service
export const fetchBookings = async (roomId) => {
    try {
        const response = await fetch(`http://localhost:8080/bookings/room/${roomId}`);
        return response.json();
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error;
    }
};