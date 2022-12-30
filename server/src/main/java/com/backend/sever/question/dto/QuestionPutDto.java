package com.backend.sever.question.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class QuestionPutDto {
    private String title;
    private String body;
    private String bodyString;
    private List<Long> tags;

}
