package com.backend.sever.question.dto.questionInfodtos;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserSimpleInfoDto {
    private long userId;
    private String displayName;
    private String profileImage;
}