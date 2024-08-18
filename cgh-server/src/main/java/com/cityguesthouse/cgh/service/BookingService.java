package com.cityguesthouse.cgh.service;

import com.cityguesthouse.cgh.entity.Booking;
import com.cityguesthouse.cgh.enums.BookingEnum;
import com.cityguesthouse.cgh.pojo.BookingPojo;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface BookingService {

    Booking createBooking(BookingPojo bookingPojo);

    Optional<Booking> getBookingById(Long id);

    List<Booking> getAllBookings();

    void deleteBooking(Long id);

    List<Booking> findBookingsByPurchaseDate(Date purchaseDate);

    List<Booking> findBookingsByPaymentStatus(BookingEnum paymentStatus);

    List<Booking> findBookingsByUserId(Long userId);
}
