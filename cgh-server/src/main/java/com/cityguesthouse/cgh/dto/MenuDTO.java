package com.cityguesthouse.cgh.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuDTO {
    private Long id;
    private String name;
    private String description;
    private String price;
    private Long categoryId; // Include category ID
}
