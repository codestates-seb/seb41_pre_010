package com.backend.sever.question.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class QuestionPostDto {
    private String title;
    private String body;
}
