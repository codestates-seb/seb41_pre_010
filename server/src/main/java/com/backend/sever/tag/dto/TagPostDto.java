package com.backend.sever.tag.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TagPostDto {
    private long tagId;
    private String tagName;
}