package com.backend.sever.comments.mapper;

import com.backend.sever.comments.dto.CommentsPutDto;
import com.backend.sever.comments.entity.Comments;
import com.backend.sever.comments.dto.CommentsPostDto;
import com.backend.sever.comments.dto.CommentsResponseDto;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommentsMapper {
    Comments commentsPostDtoToComments(CommentsPostDto commentsPostDto);


    Comments commentsPutDtoComments(CommentsPutDto commentsPutDto);

    CommentsResponseDto commentsToCommentsResponseDto(Comments comments);


}
