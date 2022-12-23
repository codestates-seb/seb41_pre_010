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

    // 코멘트 만들기

    public Comments createCommnets(Comments comments){
        return commnetsRepository.save(comments);
    }



    // 코멘트 찾기 던지기
    public Comments findComments (long commentId){

        return findVerifiedComments(commentId);

    }

    // 코멘트 찾기

    public Comments findVerifiedComments (long commentId){


        Optional<Comments> comments = commnetsRepository.findById(commentId);

        Comments findComments = comments.orElseThrow(() -> new RuntimeException()); //예외처리 작성 필요

        return findComments;

    }

    // 업데이트
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
