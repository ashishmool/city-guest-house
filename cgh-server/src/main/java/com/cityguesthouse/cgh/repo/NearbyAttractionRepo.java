package com.cityguesthouse.cgh.repo;

import com.cityguesthouse.cgh.entity.NearbyAttraction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NearbyAttractionRepo extends JpaRepository<NearbyAttraction, Long> {

    List<NearbyAttraction> findByNameContainingIgnoreCase(String name);
}
