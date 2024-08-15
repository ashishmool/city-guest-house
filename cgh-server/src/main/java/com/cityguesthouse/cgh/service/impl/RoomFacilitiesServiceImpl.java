package com.cityguesthouse.cgh.service.impl;

import com.cityguesthouse.cgh.entity.Room;
import com.cityguesthouse.cgh.entity.RoomFacilities;
import com.cityguesthouse.cgh.pojo.RoomFacilitiesPojo;
import com.cityguesthouse.cgh.repo.RoomFacilitiesRepo;
import com.cityguesthouse.cgh.repo.RoomRepo;
import com.cityguesthouse.cgh.service.RoomFacilitiesService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoomFacilitiesServiceImpl implements RoomFacilitiesService {

    private final RoomFacilitiesRepo roomFacilitiesRepo;
    private final RoomRepo roomRepo;

    @Override
    public String saveFacility(RoomFacilitiesPojo roomFacilitiesPojo) {
        Room room = roomRepo.findById(roomFacilitiesPojo.getRoomId()).orElse(null);
        if (room == null) {
            return "Room does not exist!";
        }

        RoomFacilities facility = new RoomFacilities();
        if (roomFacilitiesPojo.getId() != null) {
            facility = roomFacilitiesRepo.findById(roomFacilitiesPojo.getId()).orElse(new RoomFacilities());
        }
        facility.setRoom(room);
        facility.setFacilityName(roomFacilitiesPojo.getFacilityName());
        facility.setFacilityIcon(roomFacilitiesPojo.getFacilityIcon());
        roomFacilitiesRepo.save(facility);
        return "Facility saved successfully!";
    }

    @Override
    public List<RoomFacilities> getAllFacilities() {
        return roomFacilitiesRepo.findAll();
    }

    @Override
    public void deleteFacilityById(Long id) {
        roomFacilitiesRepo.deleteById(id);
    }

    @Override
    public Optional<RoomFacilities> getFacilityById(Long id) {
        return roomFacilitiesRepo.findById(id);
    }

    @Override
    public RoomFacilities getFacilityByRoomId(Long roomId) {
        return roomFacilitiesRepo.findByRoomId(roomId);
    }

    @Override
    public List<RoomFacilities> searchFacilitiesByFilters(Long roomId, String facilityName) {
        return roomFacilitiesRepo.findByFilters(roomId, facilityName);
    }
}
