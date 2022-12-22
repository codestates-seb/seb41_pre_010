package com.backend.sever.answer.mapper;

import com.backend.sever.answer.dto.AnswerPostDto;
import com.backend.sever.answer.dto.AnswerPutDto;
import com.backend.sever.answer.dto.AnswerResponseDto;
import com.backend.sever.answer.entity.Answer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);
    Answer answerPutDtoAnswer(AnswerPutDto answerPutDto);
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}
