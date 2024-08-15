package com.cityguesthouse.cgh.service.impl;

import com.cityguesthouse.cgh.entity.Room;
import com.cityguesthouse.cgh.pojo.RoomPojo;
import com.cityguesthouse.cgh.repo.RoomRepo;
import com.cityguesthouse.cgh.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {

    private final RoomRepo roomRepo;

    @Override
    public String saveRoom(RoomPojo roomPojo) {
        Room room = new Room();
        if (roomPojo.getId() != null) {
            room = roomRepo.findById(roomPojo.getId()).orElse(new Room());
        }
        room.setName(roomPojo.getName());
        room.setDescription(roomPojo.getDescription());
        room.setFacilities(roomPojo.getFacilities());
        room.setSize(roomPojo.getSize());
        room.setMaxPerson(roomPojo.getMaxPerson());
        room.setPrice(roomPojo.getPrice());
        room.setImage(roomPojo.getImage());
        room.setImageLg(roomPojo.getImageLg());
        roomRepo.save(room);
        return "Room saved successfully!";
    }

    @Override
    public List<Room> getAllRooms() {
        return roomRepo.findAll();
    }

    @Override
    public void deleteRoomById(Long id) {
        roomRepo.deleteById(id);
    }

    @Override
    public Optional<Room> getRoomById(Long id) {
        return roomRepo.findById(id);
    }

    @Override
    public List<Room> searchRoomsByName(String name) {
        return roomRepo.findByNameContainingIgnoreCase(name);
    }

    @Override
    public List<Room> searchRoomsByMaxPerson(Integer maxPerson) {
        return roomRepo.findByMaxPerson(maxPerson);
    }

    @Override
    public List<Room> searchRoomsByPriceRange(Double minPrice, Double maxPrice) {
        return roomRepo.findByPriceRange(minPrice, maxPrice);
    }

    @Override
    public List<Room> searchRoomsByFilters(String name, Integer maxPerson, Double minPrice, Double maxPrice) {
        return roomRepo.findByFilters(name, maxPerson, minPrice, maxPrice);
    }
}
