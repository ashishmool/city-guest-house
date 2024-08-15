package com.cityguesthouse.cgh.controller;

import com.cityguesthouse.cgh.entity.Room;
import com.cityguesthouse.cgh.pojo.RoomPojo;
import com.cityguesthouse.cgh.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rooms")
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @PostMapping("/save")
    public String saveRoom(@RequestBody RoomPojo roomPojo) throws IOException {
        return roomService.saveRoom(roomPojo);
    }

    @GetMapping("/all")
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();
    }

    @GetMapping("/{id}")
    public Optional<Room> getRoomById(@PathVariable Long id) {
        return roomService.getRoomById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteRoomById(@PathVariable Long id) throws IOException {
        roomService.deleteRoomById(id);
        return "Room deleted successfully!";
    }

    @GetMapping("/search")
    public List<Room> searchRoomsByName(@RequestParam String name) {
        return roomService.searchRoomsByName(name);
    }

    @GetMapping("/searchByMaxPerson")
    public List<Room> searchRoomsByMaxPerson(@RequestParam Integer maxPerson) {
        return roomService.searchRoomsByMaxPerson(maxPerson);
    }

    @GetMapping("/searchByPriceRange")
    public List<Room> searchRoomsByPriceRange(@RequestParam Double minPrice, @RequestParam Double maxPrice) {
        return roomService.searchRoomsByPriceRange(minPrice, maxPrice);
    }

    @GetMapping("/searchByFilters")
    public List<Room> searchRoomsByFilters(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Integer maxPerson,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice) {
        return roomService.searchRoomsByFilters(name, maxPerson, minPrice, maxPrice);
    }
}