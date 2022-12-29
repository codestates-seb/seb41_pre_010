package com.backend.sever.question.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class PageResponseDto {
    List<QuestionInfo> pageInfos;
    private long totalQuestions;
    private long totalPages;
}
