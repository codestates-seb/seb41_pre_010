package com.backend.sever.comments.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
public class CommentsPutDto {
    private long commentsId;
    private long questionId;
    private long answerId;
    private long userId;
    private String body;
}
