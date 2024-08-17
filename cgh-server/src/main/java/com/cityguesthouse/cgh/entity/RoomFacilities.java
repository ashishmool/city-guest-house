package com.cityguesthouse.cgh.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "room_facilities")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoomFacilities {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;

    @Column(name = "facility_name", nullable = false)
    private String facilityName;

    @Column(name = "facility_icon", nullable = false)
    private String facilityIcon;
}
