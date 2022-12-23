package com.backend.sever.comments.controller;

import com.backend.sever.comments.dto.CommentsResponseDto;
import com.backend.sever.comments.dto.CommentsPostDto;
import com.backend.sever.comments.entity.Comments;
import com.backend.sever.comments.service.CommentsService;
import com.backend.sever.comments.mapper.CommentsMapper;
import com.backend.sever.comments.repository.CommnetsRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/comments")
public class CommentsController {

    private final CommentsMapper commentsMapper;

    private final CommentsService commentsService;

    public CommentsController(CommentsMapper commentsMapper, CommentsService commentsService) {
        this.commentsMapper = commentsMapper;
        this.commentsService = commentsService;
    }


    @PostMapping
    public ResponseEntity postComments (@RequestBody CommentsPostDto commentsPostDto){

        Comments comments = commentsService.createCommnets(commentsMapper.commentsPostDtoToComments(commentsPostDto));
        CommentsResponseDto commentsResponse = commentsMapper.commentsToCommentsResponseDto(comments);

        return new ResponseEntity(commentsResponse, HttpStatus.OK);
    }
}
