package com.cityguesthouse.cgh.service.impl;

import com.cityguesthouse.cgh.dto.MenuDTO;
import com.cityguesthouse.cgh.entity.Category;
import com.cityguesthouse.cgh.entity.Menu;
import com.cityguesthouse.cgh.pojo.MenuPojo;
import com.cityguesthouse.cgh.repo.CategoryRepo;
import com.cityguesthouse.cgh.repo.MenuRepo;
import com.cityguesthouse.cgh.service.MenuService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MenuServiceImpl implements MenuService {

    private final MenuRepo menuRepo;
    private final CategoryRepo categoryRepo;

    @Override
    public String save(MenuPojo menuPojo) {
        Menu menu = new Menu();
        Category category = categoryRepo.findByName(menuPojo.getCategory());

        if (category == null) {
            throw new EntityNotFoundException("Category not found: " + menuPojo.getCategory());
        }

        if (menuPojo.getId() != null) {
            menu = menuRepo.findById(menuPojo.getId())
                    .orElseThrow(() -> new EntityNotFoundException("Menu item not found with ID: " + menuPojo.getId()));
        }

        menu.setName(menuPojo.getName());
        menu.setDescription(menuPojo.getDescription());
        menu.setPrice(menuPojo.getPrice());
        menu.setCategory(category);
        menuRepo.save(menu);

        return "Menu item saved successfully!";
    }

    @Override
    public List<MenuDTO> getAll() {
        return menuRepo.findAll().stream().map(menu -> {
            Long categoryId = menu.getCategory() != null ? menu.getCategory().getId() : null;
            return new MenuDTO(
                    menu.getId(),
                    menu.getName(),
                    menu.getDescription(),
                    menu.getPrice(),
                    categoryId
            );
        }).collect(Collectors.toList());
    }

    @Override
    public void deleteById(Long id) {
        if (!menuRepo.existsById(id)) {
            throw new EntityNotFoundException("Menu item not found with ID: " + id);
        }
        menuRepo.deleteById(id);
    }

    @Override
    public MenuDTO getById(Long id) {
        Menu menu = menuRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Menu item not found with ID: " + id));
        Long categoryId = menu.getCategory() != null ? menu.getCategory().getId() : null;
        return new MenuDTO(
                menu.getId(),
                menu.getName(),
                menu.getDescription(),
                menu.getPrice(),
                categoryId
        );
    }

    @Override
    public String update(Long id, MenuPojo menuPojo) {
        Menu existingMenu = menuRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Menu item not found with ID: " + id));

        Category category = categoryRepo.findByName(menuPojo.getCategory());
        if (category == null) {
            throw new EntityNotFoundException("Category not found: " + menuPojo.getCategory());
        }

        existingMenu.setName(menuPojo.getName());
        existingMenu.setDescription(menuPojo.getDescription());
        existingMenu.setPrice(menuPojo.getPrice());
        existingMenu.setCategory(category);
        menuRepo.save(existingMenu);

        return "Menu item updated successfully!";
    }

    @Override
    public List<MenuDTO> findByCategory(String categoryName) {
        return menuRepo.findByCategoryName(categoryName).stream().map(menu -> {
            Long categoryId = menu.getCategory() != null ? menu.getCategory().getId() : null;
            return new MenuDTO(
                    menu.getId(),
                    menu.getName(),
                    menu.getDescription(),
                    menu.getPrice(),
                    categoryId
            );
        }).collect(Collectors.toList());
    }
}
