package com.backend.sever.vote.service;

import com.backend.sever.question.entity.Question;
import com.backend.sever.question.repository.QuestionRepository;
import com.backend.sever.question.service.QuestionService;
import com.backend.sever.user.entity.User;
import com.backend.sever.user.service.UserService;
import com.backend.sever.vote.entity.QuestionVote;
import com.backend.sever.vote.repository.QuestionVoteRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VoteService {
    private final QuestionService questionService;
    private final QuestionRepository questionRepository;
    private final QuestionVoteRepository questionVoteRepository;
    private final UserService userService;

    public VoteService(QuestionService questionService, QuestionRepository questionRepository, QuestionVoteRepository questionVoteRepository, UserService userService) {
        this.questionService = questionService;
        this.questionRepository = questionRepository;
        this.questionVoteRepository = questionVoteRepository;
        this.userService = userService;
    }

    public QuestionVote questionVoteUp(QuestionVote vote) {
        QuestionVote questionVote = getQuestionVote(vote);

        if (questionVote.getVoteCount() >= 1) {
            throw new RuntimeException(); //임시 에러
        } else if (questionVote.getVoteCount() <= -1) {
            questionVote.voteUp();
            questionVoteCal(questionVote.getQuestion(),1);
            questionVote.getUser().voteCountDown();
            return questionVoteRepository.save(questionVote);
        }
        else{
            questionVote.voteUp();
            questionVoteCal(questionVote.getQuestion(), 1);
            questionVote.getUser().voteCountUp();
            return questionVoteRepository.save(questionVote);
        }
    }

    public QuestionVote getQuestionVote(QuestionVote vote) {
        Question question = questionService.findQuestion(vote.getQuestion().getQuestionId());
        User user = userService.findUser(vote.getUser().getUserId());
        Optional<QuestionVote> optionalQuestionVote = questionVoteRepository.findByQuestionAndUser(question,user);

        if (optionalQuestionVote.isPresent()) {
            return optionalQuestionVote.get();
        }
        else{
            QuestionVote questionVote = new QuestionVote();
            questionVote.setQuestion(question);
            questionVote.setUser(user);
            return questionVote;
        }
    }

    public void questionVoteCal(Question question, int number) {
        if(number >= 0) question.countUp();
        else question.countDown();
    }
}
