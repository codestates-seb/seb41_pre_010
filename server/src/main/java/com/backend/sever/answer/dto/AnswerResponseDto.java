package com.backend.sever.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class AnswerResponseDto {
    private Long questionId;
    private Long answerId;
    private String body;
    private LocalDateTime modifiedAt;

}
