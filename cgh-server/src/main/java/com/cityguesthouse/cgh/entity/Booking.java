package com.cityguesthouse.cgh.entity;

import com.cityguesthouse.cgh.enums.BookingEnum;
import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "bookings")
@Getter
@Setter
public class Booking {

    @Id
    @SequenceGenerator(name = "booking_seq_gen", sequenceName = "booking_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "booking_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long purchaseId;

    @Column(name = "purchase_date", nullable = false)
    private Date purchaseDate;


    @Column(name = "tour_id")
    private Long tourId;

    @Column(name = "bike_id")
    private Long bikeId;

    @Column(name = "user_id")
    private Long userId;


//    @ManyToOne
//    @JoinColumn(name = "tour_id", nullable = false)
//    private Tour tour;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
//    private SystemUser user;



    @Column(name = "quantity_persons", nullable = false)
    private Integer quantityPersons;

    @Column(name = "total_amount", nullable = false)
    private Double totalAmount;

    @Enumerated(EnumType.STRING)
    @Column(name = "payment_status", nullable = false)
    private BookingEnum paymentStatus;
}
