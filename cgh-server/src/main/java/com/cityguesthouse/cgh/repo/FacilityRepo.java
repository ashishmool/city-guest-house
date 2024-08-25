package com.cityguesthouse.cgh.repo;

import com.cityguesthouse.cgh.entity.Facility;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FacilityRepo extends JpaRepository<Facility, Long> {

    List<Facility> findByRoomId(Long roomId);
}
