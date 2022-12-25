package com.backend.sever.question.mapper;

import com.backend.sever.question.dto.QuestionPostDto;
import com.backend.sever.question.dto.QuestionPutDto;
import com.backend.sever.question.dto.QuestionResponseDto;
import com.backend.sever.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
    Question questionPutDtoToQuestion(QuestionPutDto questionPutDto);
    QuestionResponseDto questionToQuestionResponseDto(Question question);
}
