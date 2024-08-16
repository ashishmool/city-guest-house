package com.cityguesthouse.cgh.controller;

import com.cityguesthouse.cgh.entity.Category;
import com.cityguesthouse.cgh.pojo.CategoryPojo;
import com.cityguesthouse.cgh.service.CategoryService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping("/save")
    public String saveCategory(@ModelAttribute @Valid CategoryPojo categoryPojo) {
        return categoryService.save(categoryPojo);
    }

    @GetMapping("/getAll")
    public List<Category> getAll() {
        return categoryService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Category getById(@PathVariable("id") Long id) {
        return categoryService.getById(id)
                .orElseThrow(() -> new EntityNotFoundException("Category not found with ID: " + id));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        categoryService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public String updateCategory(@PathVariable("id") Long id, @ModelAttribute @Valid CategoryPojo categoryPojo) {
        return categoryService.update(id, categoryPojo);
    }
}
