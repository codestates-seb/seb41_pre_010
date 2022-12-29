package com.backend.sever.jwt.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserLoginDto {

    private long userId;
    private String displayName;
    private String title;

    private String password;
}
