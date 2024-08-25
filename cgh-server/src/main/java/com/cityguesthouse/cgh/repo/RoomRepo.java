package com.cityguesthouse.cgh.repo;

import com.cityguesthouse.cgh.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RoomRepo extends JpaRepository<Room, Long> {

    @Query("SELECT r FROM Room r WHERE r.price BETWEEN :minPrice AND :maxPrice")
    List<Room> findByPriceRange(@Param("minPrice") Double minPrice, @Param("maxPrice") Double maxPrice);

    @Query("SELECT r FROM Room r WHERE " +
            "(:name IS NULL OR LOWER(r.name) LIKE LOWER(CONCAT('%', :name, '%'))) AND " +
            "(:maxPerson IS NULL OR r.maxPerson = :maxPerson) AND " +
            "(:minPrice IS NULL OR :maxPrice IS NULL OR r.price BETWEEN :minPrice AND :maxPrice)")
    List<Room> findByFilters(@Param("name") String name,
                             @Param("maxPerson") Integer maxPerson,
                             @Param("minPrice") Double minPrice,
                             @Param("maxPrice") Double maxPrice);
}
