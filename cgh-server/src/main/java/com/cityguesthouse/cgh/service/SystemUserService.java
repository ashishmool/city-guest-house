package com.cityguesthouse.cgh.service;

import com.cityguesthouse.cgh.entity.SystemUser;
import com.cityguesthouse.cgh.pojo.NewPasswordPojo;
import com.cityguesthouse.cgh.pojo.SystemUserPojo;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface SystemUserService {

    String save(SystemUserPojo systemUserPojo);

    List<SystemUser> getAll();

    Optional<SystemUser> getByEmail(String email);

    void deleteById(Long id);

    Optional<SystemUser> getById(Long id);

    String update(Long id, SystemUserPojo systemUserPojo);

    List<Map<String, Object>> getAllUsersWithoutPassword();

    String setNewPassword(NewPasswordPojo newPasswordPojo);

}
