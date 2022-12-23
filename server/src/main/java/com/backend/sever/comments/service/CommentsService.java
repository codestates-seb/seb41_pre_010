package com.backend.sever.comments.service;

import com.backend.sever.answer.entity.Answer;
import com.backend.sever.comments.entity.Comments;
import com.backend.sever.comments.repository.CommnetsRepository;
import com.backend.sever.config.CustomBeanUtils;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CommentsService {

    private  final CommnetsRepository commnetsRepository;

    private final CustomBeanUtils<Comments> beanUtils;

    public CommentsService(CommnetsRepository commnetsRepository, CustomBeanUtils<Comments> beanUtils) {
        this.commnetsRepository = commnetsRepository;
        this.beanUtils = beanUtils;
    }

    public Comments createComments(Comments comments){
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
