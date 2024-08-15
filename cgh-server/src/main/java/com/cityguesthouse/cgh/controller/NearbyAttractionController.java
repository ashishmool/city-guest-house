package com.cityguesthouse.cgh.controller;

import com.cityguesthouse.cgh.entity.NearbyAttraction;
import com.cityguesthouse.cgh.pojo.NearbyAttractionPojo;
import com.cityguesthouse.cgh.service.NearbyAttractionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/attractions")
@RequiredArgsConstructor
public class NearbyAttractionController {

    private final NearbyAttractionService nearbyAttractionService;

    @PostMapping("/save")
    public String saveAttraction(@ModelAttribute @Valid NearbyAttractionPojo nearbyAttractionPojo) throws IOException {
        return nearbyAttractionService.save(nearbyAttractionPojo);
    }

    @GetMapping("/getAll")
    public List<NearbyAttraction> getAll() {
        return nearbyAttractionService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<NearbyAttraction> getById(@PathVariable("id") Long id) {
        return nearbyAttractionService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) throws IOException {
        nearbyAttractionService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public String updateAttraction(@PathVariable("id") Long id, @ModelAttribute @Valid NearbyAttractionPojo nearbyAttractionPojo) throws IOException {
        return nearbyAttractionService.update(id, nearbyAttractionPojo);
    }

    @GetMapping("/search")
    public List<NearbyAttraction> searchByName(@RequestParam("name") String name) {
        return nearbyAttractionService.searchByName(name);
    }
}
