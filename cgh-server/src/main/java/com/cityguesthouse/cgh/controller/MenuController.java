package com.cityguesthouse.cgh.controller;

import com.cityguesthouse.cgh.dto.MenuDTO;
import com.cityguesthouse.cgh.pojo.MenuPojo;
import com.cityguesthouse.cgh.service.MenuService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu")
@RequiredArgsConstructor
public class MenuController {

    private final MenuService menuService;

    @PostMapping("/save")
    public String saveMenu(@RequestBody @Valid MenuPojo menuPojo) {
        return menuService.save(menuPojo);
    }

    @GetMapping("/getAll")
    public List<MenuDTO> getAll() {
        return menuService.getAll();
    }

    @GetMapping("/getById/{id}")
    public MenuDTO getById(@PathVariable("id") Long id) {
        return menuService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        menuService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public String updateMenu(@PathVariable("id") Long id, @RequestBody @Valid MenuPojo menuPojo) {
        return menuService.update(id, menuPojo);
    }

    @GetMapping("/findByCategory")
    public List<MenuDTO> findByCategory(@RequestParam("category") String category) {
        return menuService.findByCategory(category);
    }
}
