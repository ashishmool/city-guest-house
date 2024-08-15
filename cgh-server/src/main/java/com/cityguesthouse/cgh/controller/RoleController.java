package com.cityguesthouse.cgh.controller;

import com.cityguesthouse.cgh.entity.Role;
import com.cityguesthouse.cgh.helper.ApiResponse;
import com.cityguesthouse.cgh.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/roles")
@RequiredArgsConstructor
public class RoleController {

    private final RoleService roleService;
    private final ApiResponse apiResponse;

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> saveRole(@RequestBody Role role) {
        return apiResponse.successResponse("Data saved successfully", true, null, roleService.save(role));
    }

    @GetMapping("/getAll")
    public List<Role> getAll() {
        return roleService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<Role> getById(@PathVariable("id") Integer id) {
        return roleService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        roleService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public String updateRole(@PathVariable("id") Integer id, @RequestBody Role role) {
        return roleService.update(id, role);
    }
}
