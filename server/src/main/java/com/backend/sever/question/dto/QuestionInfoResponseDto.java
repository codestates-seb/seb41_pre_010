package com.backend.sever.question.dto;

import com.backend.sever.question.dto.questionInfodtos.AnswerInfoDto;
import com.backend.sever.question.dto.questionInfodtos.UserSimpleInfoDto;
import com.backend.sever.questionTag.dto.QuestionTagResponseDto;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class QuestionInfoResponseDto {
    //질문 본문 정보
    private long questionId;
    private UserSimpleInfoDto user;
    private String title;
    private String body;
    private int vote;
    private String createdAt;
    private String modifiedAt;
    private List<QuestionTagResponseDto> tags;
    private List<AnswerInfoDto> answers;
}