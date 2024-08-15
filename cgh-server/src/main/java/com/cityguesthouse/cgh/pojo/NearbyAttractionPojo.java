package com.cityguesthouse.cgh.pojo;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NearbyAttractionPojo {

    private Long id;

    @NotBlank(message = "Attraction name is required")
    private String name;

    private String description;

    @NotBlank(message = "Location is required")
    private String location;

    private String contact;

    private String website;

    private MultipartFile image;
}
