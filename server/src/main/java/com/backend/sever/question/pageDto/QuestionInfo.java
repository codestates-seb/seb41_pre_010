package com.backend.sever.question.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class QuestionInfo {
    private long questionId;
    private UserDto user;
    private String title;
    private String body;
    private String createdAt;
    private String modifiedAt;
    private int vote;
    private int answers;
    private List<String> tags;

    public static class UserDto {
        private long userId;
        private String displayName;
        private String profileImage;
    }
}
