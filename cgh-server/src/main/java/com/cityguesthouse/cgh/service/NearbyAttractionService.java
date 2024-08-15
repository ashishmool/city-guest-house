package com.cityguesthouse.cgh.service;

import com.cityguesthouse.cgh.entity.NearbyAttraction;
import com.cityguesthouse.cgh.pojo.NearbyAttractionPojo;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface NearbyAttractionService {

    String save(NearbyAttractionPojo attractionPojo) throws IOException;

    List<NearbyAttraction> getAll();

    void deleteById(Long id) throws IOException;

    Optional<NearbyAttraction> getById(Long id);

    String update(Long id, NearbyAttractionPojo attractionPojo) throws IOException;

    List<NearbyAttraction> searchByName(String name);

}
