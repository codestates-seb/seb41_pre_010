package com.backend.sever.comments.dto;

import com.backend.sever.comments.entity.Comments;
import lombok.Getter;


@Getter
public class CommentsPutDto {

    private long commnetId;

    private String body;



}
