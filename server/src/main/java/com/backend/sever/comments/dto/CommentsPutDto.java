package com.backend.sever.comments.dto;

import com.backend.sever.comments.entity.Comments;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
public class CommentsPutDto {
    private long commentsId;

    private String body;



}
