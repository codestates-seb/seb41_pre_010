package com.backend.sever.question.dto;

import com.backend.sever.tag.dto.TagPostDto;
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
    private List<TagPostDto> tags;

}
