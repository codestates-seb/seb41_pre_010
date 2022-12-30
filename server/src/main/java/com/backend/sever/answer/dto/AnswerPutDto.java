package com.backend.sever.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AnswerPutDto {
    private long questionId;
    private long userId;
    private long answerId;
    private String body;
}
