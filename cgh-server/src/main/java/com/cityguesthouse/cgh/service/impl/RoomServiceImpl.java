package com.cityguesthouse.cgh.service.impl;

import com.cityguesthouse.cgh.entity.Room;
import com.cityguesthouse.cgh.pojo.RoomPojo;
import com.cityguesthouse.cgh.repo.RoomRepo;
import com.cityguesthouse.cgh.service.RoomService;
import com.cityguesthouse.cgh.utils.ImageToBase64;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
    private final ImageToBase64 imageToBase64; // Inject ImageToBase64 utility

    private static final String IMAGE_UPLOAD_DIR = "image_uploads";

    @Override
    public String saveRoom(RoomPojo roomPojo) throws IOException {
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

        // Ensure the upload directory exists
        Path uploadDir = Paths.get(IMAGE_UPLOAD_DIR);
        if (Files.notExists(uploadDir)) {
            Files.createDirectories(uploadDir);
        }

        // Handle the room's image
        if (roomPojo.getImage() != null && !roomPojo.getImage().isEmpty()) {
            Path imagePath = uploadDir.resolve(roomPojo.getImage().getOriginalFilename());
            Files.write(imagePath, roomPojo.getImage().getBytes());
            room.setImage(roomPojo.getImage().getOriginalFilename());
        }

        // Handle the room's large image
        if (roomPojo.getImageLg() != null && !roomPojo.getImageLg().isEmpty()) {
            Path imageLgPath = uploadDir.resolve(roomPojo.getImageLg().getOriginalFilename());
            Files.write(imageLgPath, roomPojo.getImageLg().getBytes());
            room.setImageLg(roomPojo.getImageLg().getOriginalFilename());
        }

        roomRepo.save(room);
        return "Room saved successfully!";
    }

    @Override
    public List<Room> getAllRooms() {
        return roomRepo.findAll().stream().map(room -> {
            room.setImage(imageToBase64.getImageBase64(room.getImage()));
            room.setImageLg(imageToBase64.getImageBase64(room.getImageLg()));
            return room;
        }).collect(Collectors.toList());
    }

    @Override
    public void deleteRoomById(Long id) throws IOException {
        Room room = roomRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Room not found with ID: " + id));
        String uploadDir = IMAGE_UPLOAD_DIR + "/" + room.getImage();
        String uploadDirLg = IMAGE_UPLOAD_DIR + "/" + room.getImageLg();
        Path uploadPath = Paths.get(uploadDir);
        Path uploadPathLg = Paths.get(uploadDirLg);
        Files.deleteIfExists(uploadPath);
        Files.deleteIfExists(uploadPathLg);
        roomRepo.deleteById(id);
    }

    @Override
    public Optional<Room> getRoomById(Long id) {
        Optional<Room> roomOptional = roomRepo.findById(id);
        roomOptional.ifPresent(room -> {
            room.setImage(imageToBase64.getImageBase64(room.getImage()));
            room.setImageLg(imageToBase64.getImageBase64(room.getImageLg()));
        });
        return roomOptional;
    }

    @Override
    public List<Room> searchRoomsByName(String name) {
        return roomRepo.findByNameContainingIgnoreCase(name).stream().map(room -> {
            room.setImage(imageToBase64.getImageBase64(room.getImage()));
            room.setImageLg(imageToBase64.getImageBase64(room.getImageLg()));
            return room;
        }).collect(Collectors.toList());
    }

    @Override
    public List<Room> searchRoomsByMaxPerson(Integer maxPerson) {
        return roomRepo.findByMaxPerson(maxPerson).stream().map(room -> {
            room.setImage(imageToBase64.getImageBase64(room.getImage()));
            room.setImageLg(imageToBase64.getImageBase64(room.getImageLg()));
            return room;
        }).collect(Collectors.toList());
    }

    @Override
    public List<Room> searchRoomsByPriceRange(Double minPrice, Double maxPrice) {
        return roomRepo.findByPriceRange(minPrice, maxPrice).stream().map(room -> {
            room.setImage(imageToBase64.getImageBase64(room.getImage()));
            room.setImageLg(imageToBase64.getImageBase64(room.getImageLg()));
            return room;
        }).collect(Collectors.toList());
    }

    @Override
    public List<Room> searchRoomsByFilters(String name, Integer maxPerson, Double minPrice, Double maxPrice) {
        return roomRepo.findByFilters(name, maxPerson, minPrice, maxPrice).stream().map(room -> {
            room.setImage(imageToBase64.getImageBase64(room.getImage()));
            room.setImageLg(imageToBase64.getImageBase64(room.getImageLg()));
            return room;
        }).collect(Collectors.toList());
    }
}
