package com.backend.sever.user.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class UserBookMarkQuestionListDto {
    private UserInfoQuestionListDto  questions;
}
