package com.backend.sever.vote;

import com.backend.sever.vote.dto.VotePostDto;
import com.backend.sever.vote.mapper.VoteMapper;
import com.backend.sever.vote.service.VoteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/votes")
public class VoteController {
    private final VoteService voteService;
    private final VoteMapper voteMapper;

    public VoteController(VoteService voteService, VoteMapper voteMapper) {
        this.voteService = voteService;
        this.voteMapper = voteMapper;
    }

    @PutMapping("/{question-id}/questions")
    public ResponseEntity putQuestionVote(@RequestBody VotePostDto votePostDto,
                                          @PathVariable ("question-id") long questionId) {
        voteService.questionVoteUp(voteMapper.voteQuestionPutDtoToVote(votePostDto));
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity getTest() {
        return new ResponseEntity(HttpStatus.OK);
    }
}
