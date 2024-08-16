package com.cityguesthouse.cgh.service;

import com.cityguesthouse.cgh.entity.Category;
import com.cityguesthouse.cgh.pojo.CategoryPojo;

import java.util.List;
import java.util.Optional;

public interface CategoryService {

    String save(CategoryPojo categoryPojo);

    List<Category> getAll();

    Optional<Category> getById(Long id);

    void deleteById(Long id);

    String update(Long id, CategoryPojo categoryPojo);
}
