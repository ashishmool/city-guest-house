package com.cityguesthouse.cgh.service;

import com.cityguesthouse.cgh.entity.Room;
import com.cityguesthouse.cgh.pojo.RoomPojo;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface RoomService {

    String save(RoomPojo roomPojo) throws IOException;

    List<Room> getAll();

    void deleteById(Long id) throws IOException;

    Optional<Room> getById(Long id);

    String update(Long id, RoomPojo roomPojo) throws IOException;

    List<Room> searchByName(String name);

    List<Room> filterRooms(String name, Integer maxPerson, Double minPrice, Double maxPrice);

    List<Room> findByPriceRange(Double minPrice, Double maxPrice);
}
