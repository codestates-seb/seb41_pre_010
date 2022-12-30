package com.backend.sever.answer.mapper;

import com.backend.sever.answer.dto.AnswerPostDto;
import com.backend.sever.answer.dto.AnswerPutDto;
import com.backend.sever.answer.dto.AnswerResponseDto;
import com.backend.sever.answer.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    @Mapping(source = "questionId",target = "question.questionId")
    @Mapping(source = "userId", target = "user.userId")
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);
    @Mapping(source = "questionId",target = "question.questionId")
    @Mapping(source = "userId", target = "user.userId")
    Answer answerPutDtoAnswer(AnswerPutDto answerPutDto);
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}
