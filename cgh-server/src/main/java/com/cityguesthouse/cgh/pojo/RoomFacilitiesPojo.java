package com.cityguesthouse.cgh.pojo;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoomFacilitiesPojo {

    private Long id;

    @NotNull(message = "Room ID is required")
    private Long roomId;

    @NotBlank(message = "Facility name is required")
    private String facilityName;

    @NotBlank(message = "Facility icon is required")
    private String facilityIcon;
}
