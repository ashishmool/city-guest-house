package com.cityguesthouse.cgh.service;

import com.cityguesthouse.cgh.entity.Booking;
import com.cityguesthouse.cgh.enums.BookingEnum;
import com.cityguesthouse.cgh.pojo.BookingPojo;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface BookingService {
    Booking purchaseTour(BookingPojo bookingPojo);
    Booking updatePurchase(Long purchaseId, BookingPojo bookingPojo);
    void deletePurchase(Long purchaseId);
    Optional<Booking> getPurchaseById(Long purchaseId);
    List<Booking> getAllPurchases();
    List<Booking> getPurchasesByDate(Date purchaseDate);

    List<Booking> getPurchasesByUserId(Long userId);
    List<Booking> getPurchasesByPaymentStatus(BookingEnum paymentStatus);
}
