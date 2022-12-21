package com.backend.sever.answer.mapper;

import com.backend.sever.answer.Dto.AnswerPostDto;
import com.backend.sever.answer.Dto.AnswerResponseDto;
import com.backend.sever.answer.entity.Answer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);

    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}
