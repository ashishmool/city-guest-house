package com.cityguesthouse.cgh.service.impl;

import com.cityguesthouse.cgh.entity.Booking;
import com.cityguesthouse.cgh.entity.Room;
import com.cityguesthouse.cgh.entity.SystemUser;
import com.cityguesthouse.cgh.enums.BookingEnum;
import com.cityguesthouse.cgh.pojo.BookingPojo;
import com.cityguesthouse.cgh.repo.BookingRepo;
import com.cityguesthouse.cgh.repo.RoomRepo;
import com.cityguesthouse.cgh.repo.SystemUserRepo;
import com.cityguesthouse.cgh.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final BookingRepo bookingRepo;
    private final RoomRepo roomRepo;
    private final SystemUserRepo systemUserRepo;

    @Override
    public Booking createBooking(BookingPojo bookingPojo) {
        Room room = roomRepo.findById(bookingPojo.getRoomId())
                .orElseThrow(() -> new IllegalArgumentException("Room not found with ID: " + bookingPojo.getRoomId()));
        SystemUser systemUser = systemUserRepo.findById(bookingPojo.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found with ID: " + bookingPojo.getUserId()));

        Booking booking = new Booking();
        booking.setRoom(room);
        booking.setSystemUser(systemUser);
        booking.setCheckIn(bookingPojo.getCheckIn());
        booking.setCheckOut(bookingPojo.getCheckOut());
        booking.setNoAdults(bookingPojo.getNoAdults());
        booking.setNoKids(bookingPojo.getNoKids());
        booking.setPurchaseDate(new Date()); // Set purchase date to current date
        booking.setPaymentStatus(BookingEnum.PENDING); // Set default payment status

        // Duration and total amount will be calculated in the entity
        return bookingRepo.save(booking);
    }

    @Override
    public Optional<Booking> getBookingById(Long id) {
        return bookingRepo.findById(id);
    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepo.findAll();
    }

    @Override
    public void deleteBooking(Long id) {
        bookingRepo.deleteById(id);
    }

    @Override
    public List<Booking> findBookingsByPurchaseDate(Date purchaseDate) {
        return bookingRepo.findByPurchaseDate(purchaseDate);
    }

    @Override
    public List<Booking> findBookingsByPaymentStatus(BookingEnum paymentStatus) {
        return bookingRepo.findByPaymentStatus(paymentStatus);
    }

    @Override
    public List<Booking> findBookingsByUserId(Long userId) {
        return bookingRepo.findBySystemUserUserId(userId);
    }
}
