package com.backend.sever.answer.mapper;

import com.backend.sever.answer.dto.AnswerPostDto;
import com.backend.sever.answer.dto.AnswerPutDto;
import com.backend.sever.answer.dto.AnswerResponseDto;
import com.backend.sever.answer.entity.Answer;
import com.backend.sever.question.entity.Question;
import com.backend.sever.user.entity.User;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto){
        Answer answer = new Answer();
        User user = new User();
        Question question = new Question();

        user.setUserId(answerPostDto.getUserId());
        question.setQuestionId(answerPostDto.getQuestionId());

        answer.setBody(answerPostDto.getBody());
        answer.setUser(user);
        answer.setQuestion(question);
        answer.setCreatedAt(LocalDateTime.now());

        return answer;
    }
    Answer answerPutDtoAnswer(AnswerPutDto answerPutDto);
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}
