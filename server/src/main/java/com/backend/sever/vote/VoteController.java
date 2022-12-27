package com.backend.sever.vote;

import com.backend.sever.vote.dto.VotePostDto;
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
    public ResponseEntity putQuestionVote(@RequestBody VotePostDto votePostDto,
                                          @PathVariable ("question-id") long questionId) {
        votePostDto.setQuestionId(questionId);
        QuestionVote questionVote = voteService.upAndDown(votePostDto);
        return new ResponseEntity(HttpStatus.OK);
    }
}
