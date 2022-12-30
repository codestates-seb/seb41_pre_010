package com.backend.sever.question.dto.questionInfodtos;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CommentsInfoDto {
    private long commentId;
    private UserSimpleInfoDto user;
    private String body;
    private String createdAt;
    private String modifiedAt;
}