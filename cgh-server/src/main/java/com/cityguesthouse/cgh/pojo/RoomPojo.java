package com.cityguesthouse.cgh.pojo;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoomPojo {

    private Long id;

    @NotBlank(message = "Room name is required")
    private String name;

    @NotBlank(message = "Room description is required")
    private String description;

    @NotNull(message = "Room size is required")
    private Integer size;

    @NotNull(message = "Maximum person count is required")
    private Integer maxPerson;

    @NotNull(message = "Price is required")
    private Double price;

    private MultipartFile image;
}
