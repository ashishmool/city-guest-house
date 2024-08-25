package com.cityguesthouse.cgh.service;

import com.cityguesthouse.cgh.entity.Facility;
import com.cityguesthouse.cgh.pojo.FacilityPojo;

import java.util.List;
import java.util.Optional;

public interface FacilityService {

    String save(FacilityPojo facilityPojo);

    List<Facility> getAll();

    Optional<Facility> getById(Long id);

    void deleteById(Long id);

    String update(Long id, FacilityPojo facilityPojo);

    List<Facility> getFacilitiesByRoomId(Long roomId);
}
