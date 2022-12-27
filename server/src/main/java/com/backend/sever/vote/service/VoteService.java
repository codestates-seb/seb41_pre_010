package com.backend.sever.vote.service;

import com.backend.sever.question.entity.Question;
import com.backend.sever.question.service.QuestionService;
import com.backend.sever.user.entity.User;
import com.backend.sever.user.service.UserService;
import com.backend.sever.vote.AnswerVotePutDto;
import com.backend.sever.vote.dto.QuestionVotePutDto;
import com.backend.sever.vote.entity.AnswerVote;
import com.backend.sever.vote.entity.QuestionVote;
import com.backend.sever.vote.mapper.VoteMapper;
import com.backend.sever.vote.repository.QuestionVoteRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VoteService {
    private final QuestionService questionService;
    private final QuestionVoteRepository questionVoteRepository;
    private final UserService userService;
    private final VoteMapper voteMapper;

    public VoteService(QuestionService questionService, QuestionVoteRepository questionVoteRepository, UserService userService, VoteMapper voteMapper) {
        this.questionService = questionService;
        this.questionVoteRepository = questionVoteRepository;
        this.userService = userService;
        this.voteMapper = voteMapper;
    }

    //up 또는 down판단
    public QuestionVote QuestionUpAndDown(QuestionVotePutDto questionVotePutDto) {
        if (questionVotePutDto.getVote() == 1) {
            return questionVoteUp(voteMapper.voteQuestionPutDtoToVote(questionVotePutDto));
        } else {
            return questionVoteDown(voteMapper.voteQuestionPutDtoToVote(questionVotePutDto));
        }
    }
    //down 로직
    private QuestionVote questionVoteDown(QuestionVote vote) {
        QuestionVote questionVote = getQuestionVote(vote);
        //up이 눌린상태
        if (questionVote.getVoteCount() >= 1) {
            questionVote.voteDown();
            questionVoteCal(questionVote.getQuestion(), -1);
            questionVote.getUser().voteCountDown();
            return questionVoteRepository.save(questionVote);
        //down이 눌린상태
        } else if (questionVote.getVoteCount() <= -1) {
            questionVote.voteUp();
            questionVoteCal(questionVote.getQuestion(), 1);
            questionVote.getUser().voteCountUp();
            return questionVoteRepository.save(questionVote);
        //아무것도 안눌린 상태
        } else {
            questionVote.voteDown();
            questionVoteCal(questionVote.getQuestion(),-1);
            questionVote.getUser().voteCountUp();
            return questionVoteRepository.save(questionVote);
        }
    }

    //up 로직
    public QuestionVote questionVoteUp(QuestionVote vote) {
        QuestionVote questionVote = getQuestionVote(vote);
        //up이 눌린 상태로 한 번 더 누를 경우 -> 취소
        if (questionVote.getVoteCount() >= 1) {
            questionVote.voteDown();
            questionVoteCal(questionVote.getQuestion(),-1);
            questionVote.getUser().voteCountDown();
            return questionVoteRepository.save(questionVote);
        //down이 눌린 상태로 up을 누를 경우
        } else if (questionVote.getVoteCount() <= -1) {
            questionVote.voteUp();
            questionVoteCal(questionVote.getQuestion(),1);
            questionVote.getUser().voteCountDown();
            return questionVoteRepository.save(questionVote);
        }
        //기존에 아무것도 안누른 경우
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

    public AnswerVote AnswerUpAndDown(AnswerVotePutDto answerVotePutDto) {
        if (answerVotePutDto.getVote() == 1) {
            return AnswerVoteUp(voteMapper.voteAnswerPutDtoToVote(answerVotePutDto));
        }
        else {
            return AnswerVoteDown(voteMapper.voteAnswerPutDtoToVote(answerVotePutDto));
        }
    }

    private AnswerVote AnswerVoteDown(AnswerVote voteAnswerPutDtoToVote) {
        return null;
    }

    private AnswerVote AnswerVoteUp(AnswerVote voteAnswerPutDtoToVote) {
        return null;
    }

    private AnswerVote getAnswerVote(long answerId) {
        return null;
    }
}
