package com.backend.sever.comments.service;

import com.backend.sever.comments.entity.Comments;
import com.backend.sever.comments.repository.CommnetsRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CommentsService {

    private  final CommnetsRepository commnetsRepository;

    public CommentsService(CommnetsRepository commnetsRepository){
        this.commnetsRepository = commnetsRepository;
    }

    public Comments createCommnets(Comments comments){
        return commnetsRepository.save(comments);
    }



    public Comments findComments (long commentId){

        return findVerifiedComments(commentId);

    }

    public Comments findVerifiedComments (long commentId){


        Optional<Comments> comments = commnetsRepository.findById(commentId);

        Comments findComments = comments.orElseThrow();

        return findComments;

    }



}
