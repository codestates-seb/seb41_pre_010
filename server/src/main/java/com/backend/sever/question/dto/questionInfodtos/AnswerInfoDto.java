package com.backend.sever.question.dto.questionInfodtos;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class AnswerInfoDto {
    private long answerId;
    private UserSimpleInfoDto user;
    private String body;
    private String createdAt;
    private String modifiedAt;
    private int vote;
    private List<CommentsInfoDto> comments;
}