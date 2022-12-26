package com.backend.sever.comments.mapper;

import com.backend.sever.comments.dto.CommentsPutDto;
import com.backend.sever.comments.entity.Comments;
import com.backend.sever.comments.dto.CommentsPostDto;
import com.backend.sever.comments.dto.CommentsResponseDto;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CommentsMapper {
    @Mapping(source = "questionId", target = "question.questionId")
    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "answerId", target = "answer.answerId")
    Comments commentsPostDtoToComments(CommentsPostDto commentsPostDto);

    @Mapping(source = "questionId", target = "question.questionId")
    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "answerId", target = "answer.answerId")
    Comments commentsPutDtoComments(CommentsPutDto commentsPutDto);

    CommentsResponseDto commentsToCommentsResponseDto(Comments comments);

}
