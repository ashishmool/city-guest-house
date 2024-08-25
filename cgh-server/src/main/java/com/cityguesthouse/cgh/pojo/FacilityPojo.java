package com.cityguesthouse.cgh.pojo;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FacilityPojo {

    private Long id;

    @NotBlank(message = "Facility name is required")
    private String name;

    private String description;

    private Long roomId;
}
