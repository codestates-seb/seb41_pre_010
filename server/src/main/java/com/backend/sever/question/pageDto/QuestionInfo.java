package com.backend.sever.question.pageDto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class QuestionInfo {
    private long questionId;
    private UserInfo user;
    private String title;
    private String body;
    private String createdAt;
    private String modifiedAt;
    private int vote;
    private int answers;
    private List<String> tags;

}
