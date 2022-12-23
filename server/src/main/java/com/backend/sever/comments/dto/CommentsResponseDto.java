package com.backend.sever.comments.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import java.time.LocalDateTime;
@Getter
@AllArgsConstructor
public class CommentsResponseDto {

    private Long commentsId;

    private String body;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;



}
