package com.backend.sever.questionTag.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class QuestionTagResponseDto {
    private long tagId;
    private String tagName;
}
