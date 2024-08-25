package com.cityguesthouse.cgh.service.impl;

import com.cityguesthouse.cgh.entity.Facility;
import com.cityguesthouse.cgh.entity.Room;
import com.cityguesthouse.cgh.pojo.FacilityPojo;
import com.cityguesthouse.cgh.repo.FacilityRepo;
import com.cityguesthouse.cgh.repo.RoomRepo;
import com.cityguesthouse.cgh.service.FacilityService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FacilityServiceImpl implements FacilityService {

    private final FacilityRepo facilityRepo;
    private final RoomRepo roomRepo;

    @Override
    public String save(FacilityPojo facilityPojo) {
        Facility facility = new Facility();
        if (facilityPojo.getId() != null) {
            facility = facilityRepo.findById(facilityPojo.getId())
                    .orElseThrow(() -> new EntityNotFoundException("Facility not found with ID: " + facilityPojo.getId()));
        }

        Room room = roomRepo.findById(facilityPojo.getRoomId())
                .orElseThrow(() -> new EntityNotFoundException("Room not found with ID: " + facilityPojo.getRoomId()));

        facility.setName(facilityPojo.getName());
        facility.setDescription(facilityPojo.getDescription());
        facility.setRoom(room);

        facilityRepo.save(facility);

        return "Facility saved successfully!";
    }

    @Override
    public List<Facility> getAll() {
        return facilityRepo.findAll();
    }

    @Override
    public Optional<Facility> getById(Long id) {
        return facilityRepo.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        Facility facility = facilityRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facility not found with ID: " + id));
        facilityRepo.delete(facility);
    }

    @Override
    public String update(Long id, FacilityPojo facilityPojo) {
        Facility existingFacility = facilityRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facility not found with ID: " + id));

        Room room = roomRepo.findById(facilityPojo.getRoomId())
                .orElseThrow(() -> new EntityNotFoundException("Room not found with ID: " + facilityPojo.getRoomId()));

        existingFacility.setName(facilityPojo.getName());
        existingFacility.setDescription(facilityPojo.getDescription());
        existingFacility.setRoom(room);

        facilityRepo.save(existingFacility);

        return "Facility updated successfully!";
    }

    @Override
    public List<Facility> getFacilitiesByRoomId(Long roomId) {
        return facilityRepo.findByRoomId(roomId);
    }
}
