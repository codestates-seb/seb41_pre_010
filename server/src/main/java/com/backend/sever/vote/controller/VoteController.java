package com.backend.sever.vote.controller;

import com.backend.sever.vote.dto.AnswerVotePutDto;
import com.backend.sever.vote.dto.QuestionVotePutDto;
import com.backend.sever.vote.entity.AnswerVote;
import com.backend.sever.vote.entity.QuestionVote;
import com.backend.sever.vote.service.VoteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/votes")
public class VoteController {
    private final VoteService voteService;

    public VoteController(VoteService voteService) {
        this.voteService = voteService;
    }

    @PutMapping("/{question-id}/questions")
    public ResponseEntity putQuestionVote(@RequestBody QuestionVotePutDto questionVotePutDto,
                                          @PathVariable ("question-id") long questionId) {
        questionVotePutDto.setQuestionId(questionId);
        QuestionVote questionVote = voteService.QuestionUpAndDown(questionVotePutDto);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/{answer-id}/answers")
    public ResponseEntity putAnswerVote(@RequestBody AnswerVotePutDto answerVotePutDto,
                                        @PathVariable("answer-id") long answerId) {
        answerVotePutDto.setAnswerId(answerId);
        AnswerVote answerVote = voteService.AnswerUpAndDown(answerVotePutDto);
        return new ResponseEntity(HttpStatus.OK);
    }
}
