package com.backend.sever.user.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class UserInfoAnswerListDto {
    private long answerId;
    private String title;
    private String createAt;
    private String modifiedAt;
    private int vote;
}
