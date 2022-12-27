package com.backend.sever.vote;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AnswerVotePutDto {
    private int voteId;
    private long answerId;
    private long userId;
}
