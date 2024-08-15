package com.cityguesthouse.cgh.service;

import com.cityguesthouse.cgh.entity.RoomFacilities;
import com.cityguesthouse.cgh.pojo.RoomFacilitiesPojo;

import java.util.List;
import java.util.Optional;

public interface RoomFacilitiesService {

    String saveFacility(RoomFacilitiesPojo roomFacilitiesPojo);

    List<RoomFacilities> getAllFacilities();

    void deleteFacilityById(Long id);

    Optional<RoomFacilities> getFacilityById(Long id);

    RoomFacilities getFacilityByRoomId(Long roomId);

    List<RoomFacilities> searchFacilitiesByFilters(Long roomId, String facilityName);
}
