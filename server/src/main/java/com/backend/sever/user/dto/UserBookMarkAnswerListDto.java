package com.backend.sever.user.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class UserBookMarkAnswerListDto {
    private UserInfoAnswerListDto answers;
}
