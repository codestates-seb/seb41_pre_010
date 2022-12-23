package com.backend.sever.question.dto;

import com.backend.sever.tag.dto.TagResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class QuestionResponseDto {
    private String title;
    private String body;
    private List<TagResponseDto> tags = createStub();

    private List<TagResponseDto> createStub() {
        TagResponseDto testTag = new TagResponseDto(0, "test");
        List<TagResponseDto> stubTagList = new ArrayList<>();
        stubTagList.add(testTag);
        return stubTagList;
    }
}
