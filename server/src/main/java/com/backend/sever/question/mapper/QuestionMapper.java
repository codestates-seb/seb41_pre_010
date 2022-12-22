package com.backend.sever.question.mapper;

import com.backend.sever.question.dto.QuestionPostDto;
import com.backend.sever.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
}
