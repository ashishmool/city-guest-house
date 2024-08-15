package com.cityguesthouse.cgh.service.impl;

import com.cityguesthouse.cgh.entity.NearbyAttraction;
import com.cityguesthouse.cgh.pojo.NearbyAttractionPojo;
import com.cityguesthouse.cgh.repo.NearbyAttractionRepo;
import com.cityguesthouse.cgh.service.NearbyAttractionService;
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
public class NearbyAttractionServiceImpl implements NearbyAttractionService {

    private final NearbyAttractionRepo nearbyAttractionRepo;
    private final ImageToBase64 imageToBase64;

    @Override
    public String save(NearbyAttractionPojo nearbyAttractionPojo) throws IOException {
        NearbyAttraction nearbyAttraction;

        if (nearbyAttractionPojo.getId() != null) {
            nearbyAttraction = nearbyAttractionRepo.findById(nearbyAttractionPojo.getId())
                    .orElseThrow(() -> new EntityNotFoundException("Attraction not found with ID: " + nearbyAttractionPojo.getId()));
        } else {
            nearbyAttraction = new NearbyAttraction();
        }

        nearbyAttraction.setName(nearbyAttractionPojo.getName());
        nearbyAttraction.setDescription(nearbyAttractionPojo.getDescription());
        nearbyAttraction.setLocation(nearbyAttractionPojo.getLocation());
        nearbyAttraction.setContact(nearbyAttractionPojo.getContact());
        nearbyAttraction.setWebsite(nearbyAttractionPojo.getWebsite());

        if (nearbyAttractionPojo.getImage() != null) {
            Path fileNameAndPath = Paths.get("image_uploads", nearbyAttractionPojo.getImage().getOriginalFilename());
            Files.write(fileNameAndPath, nearbyAttractionPojo.getImage().getBytes());
            nearbyAttraction.setImage(nearbyAttractionPojo.getImage().getOriginalFilename());
        }

        nearbyAttractionRepo.save(nearbyAttraction);
        return "Saved Successfully!";
    }

    @Override
    public List<NearbyAttraction> getAll() {
        return nearbyAttractionRepo.findAll().stream().map(item -> {
            item.setImage(imageToBase64.getImageBase64(item.getImage()));
            return item;
        }).collect(Collectors.toList());
    }

    @Override
    public void deleteById(Long id) throws IOException {
        NearbyAttraction nearbyAttraction = nearbyAttractionRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Attraction not found with ID: " + id));
        String uploadDir = "image_uploads/" + nearbyAttraction.getImage();
        Path uploadPath = Paths.get(uploadDir);
        Files.deleteIfExists(uploadPath);
        nearbyAttractionRepo.deleteById(id);
    }

    @Override
    public Optional<NearbyAttraction> getById(Long id) {
        Optional<NearbyAttraction> attractionOptional = nearbyAttractionRepo.findById(id);
        attractionOptional.ifPresent(attraction -> attraction.setImage(imageToBase64.getImageBase64(attraction.getImage())));
        return attractionOptional;
    }

    @Override
    public String update(Long id, NearbyAttractionPojo nearbyAttractionPojo) throws IOException {
        NearbyAttraction existingAttraction = nearbyAttractionRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Attraction not found with ID: " + id));

        existingAttraction.setName(nearbyAttractionPojo.getName());
        existingAttraction.setDescription(nearbyAttractionPojo.getDescription());
        existingAttraction.setLocation(nearbyAttractionPojo.getLocation());
        existingAttraction.setContact(nearbyAttractionPojo.getContact());
        existingAttraction.setWebsite(nearbyAttractionPojo.getWebsite());

        if (nearbyAttractionPojo.getImage() != null) {
            Path fileNameAndPath = Paths.get("image_uploads", nearbyAttractionPojo.getImage().getOriginalFilename());
            Files.write(fileNameAndPath, nearbyAttractionPojo.getImage().getBytes());
            existingAttraction.setImage(nearbyAttractionPojo.getImage().getOriginalFilename());
        }

        nearbyAttractionRepo.save(existingAttraction);
        return "Updated Successfully!";
    }

    @Override
    public List<NearbyAttraction> searchByName(String name) {
        return nearbyAttractionRepo.findByNameContainingIgnoreCase(name);
    }
}
