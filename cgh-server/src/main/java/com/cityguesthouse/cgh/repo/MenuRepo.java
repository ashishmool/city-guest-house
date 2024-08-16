package com.cityguesthouse.cgh.repo;

import com.cityguesthouse.cgh.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MenuRepo extends JpaRepository<Menu, Long> {

    List<Menu> findByCategoryName(String categoryName);
}
