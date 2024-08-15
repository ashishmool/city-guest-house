package com.cityguesthouse.cgh.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "nearby_attractions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NearbyAttraction {

    @Id
    @SequenceGenerator(name = "attraction_seq_gen", sequenceName = "attraction_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "attraction_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "location", nullable = false)
    private String location;

    @Column(name = "contact")
    private String contact;

    @Column(name = "website")
    private String website;

    @Column(name = "image")
    private String image;
}
