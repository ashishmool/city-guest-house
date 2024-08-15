package com.cityguesthouse.cgh.controller;

import com.cityguesthouse.cgh.entity.RoomFacilities;
import com.cityguesthouse.cgh.pojo.RoomFacilitiesPojo;
import com.cityguesthouse.cgh.service.RoomFacilitiesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/room-facilities")
@RequiredArgsConstructor
public class RoomFacilitiesController {

    private final RoomFacilitiesService roomFacilitiesService;

    @PostMapping("/save")
    public String saveFacility(@RequestBody RoomFacilitiesPojo roomFacilitiesPojo) {
        return roomFacilitiesService.saveFacility(roomFacilitiesPojo);
    }

    @GetMapping("/all")
    public List<RoomFacilities> getAllFacilities() {
        return roomFacilitiesService.getAllFacilities();
    }

    @GetMapping("/{id}")
    public Optional<RoomFacilities> getFacilityById(@PathVariable Long id) {
        return roomFacilitiesService.getFacilityById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteFacilityById(@PathVariable Long id) {
        roomFacilitiesService.deleteFacilityById(id);
        return "Facility deleted successfully!";
    }

    @GetMapping("/by-room/{roomId}")
    public RoomFacilities getFacilityByRoomId(@PathVariable Long roomId) {
        return roomFacilitiesService.getFacilityByRoomId(roomId);
    }

    @GetMapping("/search")
    public List<RoomFacilities> searchFacilitiesByFilters(
            @RequestParam(required = false) Long roomId,
            @RequestParam(required = false) String facilityName) {
        return roomFacilitiesService.searchFacilitiesByFilters(roomId, facilityName);
    }
}
