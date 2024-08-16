package com.cityguesthouse.cgh.service;

import com.cityguesthouse.cgh.dto.MenuDTO;
import com.cityguesthouse.cgh.pojo.MenuPojo;

import java.util.List;

public interface MenuService {

    String save(MenuPojo menuPojo);

    List<MenuDTO> getAll(); // Return List<MenuDTO> instead of List<Menu>

    void deleteById(Long id);

    MenuDTO getById(Long id); // Return MenuDTO instead of Menu

    String update(Long id, MenuPojo menuPojo);

    List<MenuDTO> findByCategory(String categoryName); // Return List<MenuDTO> instead of List<Menu>
}
