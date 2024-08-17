package com.cityguesthouse.cgh.controller;

import com.cityguesthouse.cgh.entity.RoomFacilities;
import com.cityguesthouse.cgh.pojo.RoomFacilitiesPojo;
import com.cityguesthouse.cgh.service.RoomFacilitiesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/room-facilities")
@RequiredArgsConstructor
public class RoomFacilitiesController {

    private final RoomFacilitiesService roomFacilitiesService;

    @PostMapping("/save")
    public ResponseEntity<String> saveFacility(@RequestBody RoomFacilitiesPojo roomFacilitiesPojo) {
        String response = roomFacilitiesService.saveFacility(roomFacilitiesPojo);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/all")
    public ResponseEntity<List<RoomFacilities>> getAllFacilities() {
        List<RoomFacilities> facilities = roomFacilitiesService.getAllFacilities();
        return ResponseEntity.ok(facilities);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFacilityById(@PathVariable Long id) {
        roomFacilitiesService.deleteFacilityById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomFacilities> getFacilityById(@PathVariable Long id) {
        Optional<RoomFacilities> facility = roomFacilitiesService.getFacilityById(id);
        return facility.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }


    @GetMapping("/room/{roomId}")
    public ResponseEntity<List<RoomFacilities>> getFacilitiesByRoomId(@PathVariable Long roomId) {
        List<RoomFacilities> facilities = roomFacilitiesService.getFacilitiesByRoomId(roomId);
        if (facilities.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(facilities);
    }

//    @GetMapping("/search")
//    public ResponseEntity<List<RoomFacilities>> searchFacilitiesByFilters(
//            @RequestParam(required = false) Long roomId,
//            @RequestParam(required = false) String facilityName) {
//        List<RoomFacilities> facilities = roomFacilitiesService.searchFacilitiesByFilters(roomId, facilityName);
//        return ResponseEntity.ok(facilities);
//    }
}
