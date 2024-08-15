package com.cityguesthouse.cgh.repo;

import com.cityguesthouse.cgh.entity.Booking;
import com.cityguesthouse.cgh.enums.BookingEnum;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface BookingRepo extends JpaRepository<Booking, Long> {
    List<Booking> findByPurchaseDate(Date purchaseDate);
    List<Booking> findByPaymentStatus(BookingEnum paymentStatus);
    List<Booking> findByUserId(Long userId);
}
