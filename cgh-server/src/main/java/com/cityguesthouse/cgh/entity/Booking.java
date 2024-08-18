package com.cityguesthouse.cgh.entity;

import com.cityguesthouse.cgh.enums.BookingEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "bookings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private SystemUser systemUser;

    @Column(nullable = false)
    private LocalDate checkIn;

    @Column(nullable = false)
    private LocalDate checkOut;

    @Column(nullable = false)
    private Integer noAdults;

    @Column(nullable = false)
    private Integer noKids;

    @Column(nullable = false)
    private Date purchaseDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private BookingEnum paymentStatus;

    @Transient
    private Integer duration;

    @Transient
    private Double totalAmount;

    @PostLoad
    private void calculateDurationAndAmount() {
        if (checkIn != null && checkOut != null) {
            this.duration = (int) (checkOut.toEpochDay() - checkIn.toEpochDay());
            this.totalAmount = this.duration * room.getPrice();
        }
    }
}
