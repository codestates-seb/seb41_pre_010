package com.backend.sever.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerPostDto {
    private long questionId;
    private long userId;
    private String body;
}
