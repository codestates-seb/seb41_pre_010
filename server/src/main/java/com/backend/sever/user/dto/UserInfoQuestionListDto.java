package com.backend.sever.user.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class UserInfoQuestionListDto {
    private long questionId;
    private String title;
    private String createdAt;
    private String modifiedAt;
    private int vote;
}
