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
public class MenuPojo {

    private Long id;

    @NotBlank(message = "Menu item name is required")
    private String name;

    private String description;

    @NotBlank(message = "Price is required")
    private String price;

    @NotBlank(message = "Category is required")
    private String category;
}
