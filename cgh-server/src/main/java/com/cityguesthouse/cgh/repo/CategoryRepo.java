package com.cityguesthouse.cgh.repo;

import com.cityguesthouse.cgh.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category, Long> {

    Category findByName(String name);
}
