package com.backend.sever.tag.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TagResponseDto {
    private long tagId;
    private String tagName;

    // --- Stub 데이터 생성용 생성자 ---
    public TagResponseDto(long tagId, String tagName) {
        this.tagId = tagId;
        this.tagName = tagName;
    }
    // ---
}
