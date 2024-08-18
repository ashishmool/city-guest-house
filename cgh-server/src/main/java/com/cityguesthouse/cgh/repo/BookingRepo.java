package com.cityguesthouse.cgh.repo;

import com.cityguesthouse.cgh.entity.Booking;
import com.cityguesthouse.cgh.enums.BookingEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Long> {

    List<Booking> findByPurchaseDate(Date purchaseDate);

    List<Booking> findByPaymentStatus(BookingEnum paymentStatus);

    List<Booking> findBySystemUserUserId(Long userId);
}
