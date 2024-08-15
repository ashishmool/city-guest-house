package com.cityguesthouse.cgh.pojo;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

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

    @NotEmpty(message = "Facilities are required")
    private List<String> facilities;

    @NotNull(message = "Room size is required")
    @Positive(message = "Room size must be positive")
    private Integer size;

    @NotNull(message = "Maximum person is required")
    @Positive(message = "Maximum person must be positive")
    private Integer maxPerson;

    @NotNull(message = "Room price is required")
    @Positive(message = "Room price must be positive")
    private Double price;

    @NotNull(message = "Room image is required")
    private MultipartFile image;

    @NotNull(message = "Room large image is required")
    private MultipartFile imageLg;
}
