package com.backend.sever.question.dto;

import com.backend.sever.questionTag.dto.QuestionTagDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class QuestionPostDto {
    private String title;
    private String body;
    private List<QuestionTagDto> tags;
}