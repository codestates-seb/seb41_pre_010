package com.backend.sever.comments.service;

import com.backend.sever.answer.entity.Answer;
import com.backend.sever.answer.service.AnswerService;
import com.backend.sever.comments.entity.Comments;
import com.backend.sever.comments.repository.CommnetsRepository;
import com.backend.sever.config.CustomBeanUtils;
import com.backend.sever.question.service.QuestionService;
import com.backend.sever.user.service.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CommentsService {
    private  final CommnetsRepository commnetsRepository;
    private final CustomBeanUtils<Comments> beanUtils;
    private final QuestionService questionService;
    private final AnswerService answerService;
    private final UserService userService;

    public CommentsService(CommnetsRepository commnetsRepository, CustomBeanUtils<Comments> beanUtils, QuestionService questionService, AnswerService answerService, UserService userService) {
        this.commnetsRepository = commnetsRepository;
        this.beanUtils = beanUtils;
        this.questionService = questionService;
        this.answerService = answerService;
        this.userService = userService;
    }

    public Comments createComments(Comments comments){
        Answer answer = answerService.findAnswer(comments.getAnswer().getAnswerId());

        comments.setAnswer(answer);

        return commnetsRepository.save(comments);
    }

    public Comments findComments (long commentId){
        return findVerifiedComments(commentId);
    }

    public Comments findVerifiedComments (long commentId){
        Optional<Comments> comments = commnetsRepository.findById(commentId);

        Comments findComments = comments.orElseThrow(() -> new RuntimeException());

        return findComments;
    }

    public Comments updateComments(Comments comments){
        Comments findComments = findComments(comments.getCommentsId());

        Comments updateComments = beanUtils.copyNonNullProperties(comments, findComments);

        return commnetsRepository.save(updateComments);
    }

    public void deleteComments (long commentsId){
        Comments findComments = findVerifiedComments(commentsId);
        commnetsRepository.delete(findComments);
    }
}