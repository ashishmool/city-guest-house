package com.cityguesthouse.cgh.pojo;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@AllArgsConstructor
@NoArgsConstructor
public class NewPasswordPojo {
    private String newPassword;
    private String token;
}
