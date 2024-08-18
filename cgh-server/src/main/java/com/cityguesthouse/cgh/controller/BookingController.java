package com.cityguesthouse.cgh.controller;

import com.cityguesthouse.cgh.entity.Booking;
import com.cityguesthouse.cgh.enums.BookingEnum;
import com.cityguesthouse.cgh.pojo.BookingPojo;
import com.cityguesthouse.cgh.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    @PostMapping("/save")
    public ResponseEntity<Booking> createBooking(@RequestBody BookingPojo bookingPojo) {
        Booking createdBooking = bookingService.createBooking(bookingPojo);
        return new ResponseEntity<>(createdBooking, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Optional<Booking> booking = bookingService.getBookingById(id);
        return booking.map(ResponseEntity::ok).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> bookings = bookingService.getAllBookings();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/byPurchaseDate")
    public ResponseEntity<List<Booking>> findBookingsByPurchaseDate(@RequestParam Date purchaseDate) {
        List<Booking> bookings = bookingService.findBookingsByPurchaseDate(purchaseDate);
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/byPaymentStatus")
    public ResponseEntity<List<Booking>> findBookingsByPaymentStatus(@RequestParam BookingEnum paymentStatus) {
        List<Booking> bookings = bookingService.findBookingsByPaymentStatus(paymentStatus);
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/byUserId/{id}")
    public ResponseEntity<List<Booking>> findBookingsByUserId(@RequestParam Long userId) {
        List<Booking> bookings = bookingService.findBookingsByUserId(userId);
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }
}
