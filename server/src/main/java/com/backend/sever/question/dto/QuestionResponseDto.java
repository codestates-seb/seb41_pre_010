package com.backend.sever.question.dto;

import com.backend.sever.questionTag.dto.QuestionTagResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class QuestionResponseDto {
    private long questionId;
    private String title;
    private String body;
    private List<QuestionTagResponseDto> tags;
}
