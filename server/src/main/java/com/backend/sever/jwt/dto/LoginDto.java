package com.backend.sever.jwt.dto;

import lombok.Getter;

@Getter
public class LoginDto {

    private String displayName;

    private String email;

    private String password;

}
