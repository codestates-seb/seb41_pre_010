package com.backend.sever.bookmark.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AnswerBookmarkPutDto {
    private long answerId;
    private long userId;
}
