package com.cityguesthouse.cgh.service.impl;

import com.cityguesthouse.cgh.entity.Category;
import com.cityguesthouse.cgh.pojo.CategoryPojo;
import com.cityguesthouse.cgh.repo.CategoryRepo;
import com.cityguesthouse.cgh.service.CategoryService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepo categoryRepo;

    @Override
    public String save(CategoryPojo categoryPojo) {
        Category category = new Category();
        if (categoryPojo.getId() != null) {
            category = categoryRepo.findById(categoryPojo.getId())
                    .orElseThrow(() -> new EntityNotFoundException("Category not found with ID: " + categoryPojo.getId()));
        }
        category.setName(categoryPojo.getName());
        categoryRepo.save(category);

        return "Category saved successfully!";
    }

    @Override
    public List<Category> getAll() {
        return categoryRepo.findAll();
    }

    @Override
    public Optional<Category> getById(Long id) {
        return categoryRepo.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        Category category = categoryRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Category not found with ID: " + id));
        categoryRepo.delete(category);  // Delete entity instead of ID
    }

    @Override
    public String update(Long id, CategoryPojo categoryPojo) {
        Category existingCategory = categoryRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Category not found with ID: " + id));

        existingCategory.setName(categoryPojo.getName());
        categoryRepo.save(existingCategory);

        return "Category updated successfully!";
    }
}
