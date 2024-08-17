package com.cityguesthouse.cgh.repo;

import com.cityguesthouse.cgh.entity.RoomFacilities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RoomFacilitiesRepo extends JpaRepository<RoomFacilities, Long> {

//    List<RoomFacilities> findByRoomId(Long roomId);
//
//    @Query("SELECT rf FROM RoomFacilities rf WHERE " +
//            "(:roomId IS NULL OR rf.room.id = :roomId) AND " +
//            "(:facilityName IS NULL OR LOWER(rf.facilityName) LIKE LOWER(CONCAT('%', :facilityName, '%')))")
//    List<RoomFacilities> findByFilters(@Param("roomId") Long roomId,
//                                       @Param("facilityName") String facilityName);



    List<RoomFacilities> findByRoomId(Long roomId);



}
