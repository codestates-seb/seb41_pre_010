package com.backend.sever.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UserResponseDto {
    private long userId;
    private String profileImage;
    private String displayName;
    private String title;
}
