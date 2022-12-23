package com.backend.sever.user.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UserInfoResponseDto {
    private List<UserInfoQuestionListDto> questions;
}
