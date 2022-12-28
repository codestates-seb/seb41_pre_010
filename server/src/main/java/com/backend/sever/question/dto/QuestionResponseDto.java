package com.backend.sever.question.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class QuestionResponseDto {
    private long questionId;
    private String title;
    private String body;
    private List<QuestionTagResponseDto> tags;
}