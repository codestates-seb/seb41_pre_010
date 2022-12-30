package com.backend.sever.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.lang.Nullable;

@Getter
@Setter
@AllArgsConstructor
public class UserPutDto {
    private long userId;
    private String displayName;
    private String title;

    @Nullable
    private String profileImage;
}
