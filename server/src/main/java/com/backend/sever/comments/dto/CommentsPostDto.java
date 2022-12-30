package com.backend.sever.comments.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CommentsPostDto {
    private long questionId;
    private long answerId;
    private long userId;
    private String body;
}
