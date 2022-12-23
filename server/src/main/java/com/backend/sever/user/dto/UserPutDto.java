package com.backend.sever.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserPutDto {
    private String displayName;
    private String title;
}
