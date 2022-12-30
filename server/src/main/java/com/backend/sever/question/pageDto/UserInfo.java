package com.backend.sever.question.pageDto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserInfo {
    private long userId;
    private String displayName;
    private String profileImage;
}
