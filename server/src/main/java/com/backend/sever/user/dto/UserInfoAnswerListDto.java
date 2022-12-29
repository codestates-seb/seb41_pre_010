package com.backend.sever.user.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class UserInfoAnswerListDto {
    private long questionId;
    private String title;
    private String createAt;
    private String modifiedAt;
    private int vote;
    private long answerId;
}
