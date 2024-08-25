package com.cityguesthouse.cgh.controller;

import com.cityguesthouse.cgh.entity.Facility;
import com.cityguesthouse.cgh.pojo.FacilityPojo;
import com.cityguesthouse.cgh.service.FacilityService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/facilities")
@RequiredArgsConstructor
public class FacilityController {

    private final FacilityService facilityService;

    @PostMapping("/save")
    public String saveFacility(@RequestBody @Valid FacilityPojo facilityPojo) {
        return facilityService.save(facilityPojo);
    }

    @GetMapping("/getAll")
    public List<FacilityPojo> getAllFacilities() {
        List<Facility> facilities = facilityService.getAll();
        return facilities.stream()
                .map(facility -> new FacilityPojo(
                        facility.getId(),
                        facility.getName(),
                        facility.getDescription(),
                        facility.getRoom().getId() // Extract roomId
                ))
                .collect(Collectors.toList());
    }

    @GetMapping("/getById/{id}")
    public Facility getById(@PathVariable("id") Long id) {
        return facilityService.getById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facility not found with ID: " + id));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        facilityService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public String updateFacility(@PathVariable("id") Long id, @ModelAttribute @Valid FacilityPojo facilityPojo) {
        return facilityService.update(id, facilityPojo);
    }

    @GetMapping("/room/{roomId}")
    public List<Facility> getFacilitiesByRoomId(@PathVariable("roomId") Long roomId) {
        return facilityService.getFacilitiesByRoomId(roomId);
    }
}
