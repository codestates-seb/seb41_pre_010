package com.backend.sever.comments.service;

import com.backend.sever.comments.entity.Comments;
import com.backend.sever.comments.repository.CommnetsRepository;
import org.springframework.stereotype.Service;


@Service
public class CommentsService {

    private  final CommnetsRepository commnetsRepository;

    public CommentsService(CommnetsRepository commnetsRepository){
        this.commnetsRepository = commnetsRepository;
    }

    public Comments createCommnets(Comments comments){
        return commnetsRepository.save(comments);
    }





}
