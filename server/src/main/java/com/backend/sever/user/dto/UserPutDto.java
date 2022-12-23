package com.backend.sever.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserPutDto {
    private String displayName;
    private String title;
}
