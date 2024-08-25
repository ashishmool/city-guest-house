package com.cityguesthouse.cgh.controller;

import com.cityguesthouse.cgh.entity.Room;
import com.cityguesthouse.cgh.pojo.RoomPojo;
import com.cityguesthouse.cgh.service.RoomService;
import jakarta.validation.Valid;
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
    public String saveRoom(@ModelAttribute @Valid RoomPojo roomPojo) throws IOException {
        return roomService.save(roomPojo);
    }

    @GetMapping("/getAll")
    public List<Room> getAll() {
        return roomService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<Room> getById(@PathVariable("id") Long id) {
        return roomService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) throws IOException {
        roomService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public String updateRoom(@PathVariable("id") Long id, @ModelAttribute @Valid RoomPojo roomPojo) throws IOException {
        return roomService.update(id, roomPojo);
    }

    @GetMapping("/search")
    public List<Room> searchByName(@RequestParam("name") String name) {
        return roomService.searchByName(name);
    }

    @GetMapping("/filter")
    public List<Room> filterRooms(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "maxPerson", required = false) Integer maxPerson,
            @RequestParam(value = "minPrice", required = false) Double minPrice,
            @RequestParam(value = "maxPrice", required = false) Double maxPrice) {
        return roomService.filterRooms(name, maxPerson, minPrice, maxPrice);
    }
}
