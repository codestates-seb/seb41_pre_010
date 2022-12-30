package com.backend.sever.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class UserPostDto {

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

    @NotBlank(message = "이름은 공백이 아니어야 합니다.")
    private String displayName;

    @NotBlank
    private String profileImage;



}
