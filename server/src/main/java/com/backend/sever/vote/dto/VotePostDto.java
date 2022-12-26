package com.backend.sever.vote.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class VotePostDto {
    private int vote;
    private long questionId;
    private long userId;
}
