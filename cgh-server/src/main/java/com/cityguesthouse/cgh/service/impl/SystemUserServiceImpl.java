package com.cityguesthouse.cgh.service.impl;

import com.cityguesthouse.cgh.config.PasswordEncoderUtil;
import com.cityguesthouse.cgh.entity.SystemUser;
import com.cityguesthouse.cgh.pojo.NewPasswordPojo;
import com.cityguesthouse.cgh.pojo.SystemUserPojo;
import com.cityguesthouse.cgh.repo.SystemUserRepo;
import com.cityguesthouse.cgh.security.JwtService;
import com.cityguesthouse.cgh.service.SystemUserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class SystemUserServiceImpl implements SystemUserService {

    private final SystemUserRepo systemUserRepo;
    private final JwtService jwtService;


    @Override
    public String save(SystemUserPojo systemUserPojo) {
        SystemUser systemUser;

        try {

        if (systemUserPojo.getUserId() != null) {
            systemUser = systemUserRepo.findById(systemUserPojo.getUserId())
                    .orElseThrow(() -> new EntityNotFoundException("SystemUser not found with ID: " + systemUserPojo.getUserId()));
        } else {
            systemUser = new SystemUser();
        }

        // Set values from SystemUserPojo to SystemUser entity
        systemUser.setFirstName(systemUserPojo.getFirstName());
        systemUser.setLastName(systemUserPojo.getLastName());
        systemUser.setRole("Customer");
        systemUser.setEmail(systemUserPojo.getEmail());


        systemUser.setPassword(PasswordEncoderUtil.getInstance().encode(systemUserPojo.getPassword()));

        systemUserRepo.save(systemUser);
        return "Saved Successfully!";
        } catch (DataIntegrityViolationException e) {
            return "Email already exists!";
        }
    }

    public List<Map<String, Object>> getAllUsersWithoutPassword() {
        List<SystemUser> customers = systemUserRepo.findAll();

        List<Map<String, Object>> customersWithoutPassword = new ArrayList<>();
        for (SystemUser customer : customers) {
            Map<String, Object> customerMap = new HashMap<>();
            customerMap.put("userId", customer.getUserId());
            customerMap.put("firstName", customer.getFirstName());
            customerMap.put("lastName", customer.getLastName());
            customerMap.put("email", customer.getEmail());
            customerMap.put("role", customer.getRole());
            // Add other fields as needed
            customersWithoutPassword.add(customerMap);
        }

        return customersWithoutPassword;
    }

    @Override
    public String setNewPassword(NewPasswordPojo newPasswordPojo) {
       String email=jwtService.extractUsername(newPasswordPojo.getToken());
       SystemUser systemUser=systemUserRepo.findByEmail(email).get();
        systemUser.setPassword(PasswordEncoderUtil.getInstance().encode(newPasswordPojo.getNewPassword()));
        systemUserRepo.save(systemUser);
        return null;
    }

    @Override
    public List<SystemUser> getAll() {
        return systemUserRepo.findAll();
    }

    @Override
    public void deleteById(Long id) {
        systemUserRepo.deleteById(id);
    }

    @Override
    public Optional<SystemUser> getById(Long id) {
        return systemUserRepo.findById(id);
    }

    @Override
    public String update(Long id, SystemUserPojo systemUserPojo) {
        try {
        SystemUser systemUser = systemUserRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("SystemUser not found with ID: " + id));

        // Set values from SystemUserPojo to SystemUser entity for update
        systemUser.setFirstName(systemUserPojo.getFirstName());
        systemUser.setLastName(systemUserPojo.getLastName());
        systemUser.setRole(systemUserPojo.getRole());
        systemUser.setEmail(systemUserPojo.getEmail());
        systemUser.setPassword(systemUserPojo.getPassword());

        systemUserRepo.save(systemUser);
        return "Updated Successfully!";
        } catch (DataIntegrityViolationException e) {
            return "Email already exists!";
        }
    }

    @Override
    public Optional<SystemUser> getByEmail(String email) {
        return systemUserRepo.findByEmail(email);
    }

    // Other custom service methods, if any
}
