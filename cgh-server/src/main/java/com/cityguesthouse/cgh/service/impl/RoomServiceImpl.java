package com.cityguesthouse.cgh.service.impl;

import com.cityguesthouse.cgh.entity.Room;
import com.cityguesthouse.cgh.pojo.RoomPojo;
import com.cityguesthouse.cgh.repo.RoomRepo;
import com.cityguesthouse.cgh.service.RoomService;
import com.cityguesthouse.cgh.utils.ImageToBase64;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {

    private final RoomRepo roomRepo;
    private final ImageToBase64 imageToBase64;

    @Override
    public String save(RoomPojo roomPojo) throws IOException {
        Room room;

        if (roomPojo.getId() != null) {
            room = roomRepo.findById(roomPojo.getId())
                    .orElseThrow(() -> new EntityNotFoundException("Room not found with ID: " + roomPojo.getId()));
        } else {
            room = new Room();
        }

        room.setName(roomPojo.getName());
        room.setDescription(roomPojo.getDescription());
        room.setSize(roomPojo.getSize());
        room.setMaxPerson(roomPojo.getMaxPerson());
        room.setPrice(roomPojo.getPrice());

        if (roomPojo.getImage() != null) {
            Path fileNameAndPath = Paths.get("image_uploads", roomPojo.getImage().getOriginalFilename());
            Files.write(fileNameAndPath, roomPojo.getImage().getBytes());
            room.setImage(roomPojo.getImage().getOriginalFilename());
        }

        roomRepo.save(room);
        return "Saved Successfully!";
    }

    @Override
    public List<Room> getAll() {
        return roomRepo.findAll().stream().map(room -> {
            room.setImage(imageToBase64.getImageBase64(room.getImage()));
            return room;
        }).collect(Collectors.toList());
    }

    @Override
    public void deleteById(Long id) throws IOException {
        Room room = roomRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Room not found with ID: " + id));
        String uploadDir = "image_uploads/" + room.getImage();
        Path uploadPath = Paths.get(uploadDir);
        Files.deleteIfExists(uploadPath);
        roomRepo.deleteById(id);
    }

    @Override
    public Optional<Room> getById(Long id) {
        Optional<Room> roomOptional = roomRepo.findById(id);
        roomOptional.ifPresent(room -> room.setImage(imageToBase64.getImageBase64(room.getImage())));
        return roomOptional;
    }

    @Override
    public String update(Long id, RoomPojo roomPojo) throws IOException {
        Room existingRoom = roomRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Room not found with ID: " + id));

        existingRoom.setName(roomPojo.getName());
        existingRoom.setDescription(roomPojo.getDescription());
        existingRoom.setSize(roomPojo.getSize());
        existingRoom.setMaxPerson(roomPojo.getMaxPerson());
        existingRoom.setPrice(roomPojo.getPrice());

        if (roomPojo.getImage() != null) {
            Path fileNameAndPath = Paths.get("image_uploads", roomPojo.getImage().getOriginalFilename());
            Files.write(fileNameAndPath, roomPojo.getImage().getBytes());
            existingRoom.setImage(roomPojo.getImage().getOriginalFilename());
        }

        roomRepo.save(existingRoom);
        return "Updated Successfully!";
    }

    @Override
    public List<Room> searchByName(String name) {
        return roomRepo.findByFilters(name, null, null, null);
    }

    @Override
    public List<Room> filterRooms(String name, Integer maxPerson, Double minPrice, Double maxPrice) {
        return roomRepo.findByFilters(name, maxPerson, minPrice, maxPrice);
    }

    @Override
    public List<Room> findByPriceRange(Double minPrice, Double maxPrice) {
        return roomRepo.findByPriceRange(minPrice, maxPrice);
    }
}
