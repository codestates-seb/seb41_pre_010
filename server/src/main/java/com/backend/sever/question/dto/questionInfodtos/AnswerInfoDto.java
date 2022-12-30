package com.backend.sever.question.dto.questionInfodtos;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class AnswerInfoDto {
    private long answerId;
    private UserSimpleInfoDto user;
    private String body;
    private String createdAt;
    private String modifiedAt;
    private int vote;
    private boolean voteUpCheck;
    private boolean voteDownCheck;
    private boolean bookmarkCheck;
    private List<CommentsInfoDto> comments;
}