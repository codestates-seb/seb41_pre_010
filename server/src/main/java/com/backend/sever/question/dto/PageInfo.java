package com.backend.sever.question.dto;

import com.backend.sever.tag.entity.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class PageInfo {
    private long questionId;
    private UserDto user;
    private String title;
    private String body;
    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime modifiedAt = LocalDateTime.now();
    private int vote;
    private int answers;
    private Tag tag;

    static class UserDto {
        private long userId;
        private String displayName;
        private String profileImage;
    }
}
