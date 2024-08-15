package com.cityguesthouse.cgh.service;

import com.cityguesthouse.cgh.entity.Room;
import com.cityguesthouse.cgh.pojo.RoomPojo;

import java.util.List;
import java.util.Optional;

public interface RoomService {

    String saveRoom(RoomPojo roomPojo);

    List<Room> getAllRooms();

    void deleteRoomById(Long id);

    Optional<Room> getRoomById(Long id);

    List<Room> searchRoomsByName(String name);

    List<Room> searchRoomsByMaxPerson(Integer maxPerson);

    List<Room> searchRoomsByPriceRange(Double minPrice, Double maxPrice);

    List<Room> searchRoomsByFilters(String name, Integer maxPerson, Double minPrice, Double maxPrice);
}
