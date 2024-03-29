package com.backend.sever.vote.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AnswerVotePutDto {
    private int vote;
    private long answerId;
    private long userId;
}
