package com.backend.sever.user.mapper;

import com.backend.sever.answer.entity.Answer;
import com.backend.sever.bookmark.entity.BookmarkAnswer;
import com.backend.sever.bookmark.entity.BookmarkQuestion;
import com.backend.sever.question.entity.Question;
import com.backend.sever.user.dto.*;
import com.backend.sever.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.time.format.DateTimeFormatter;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserResponseDto userToUserResponseDto(User user);

    User userPutToDtoToUser(UserPutDto userPutDto);

    default UserInfoQuestionListDto questionToUserInfoQuestionListDto(Question question) {
        UserInfoQuestionListDto.UserInfoQuestionListDtoBuilder userInfoQuestionListDtoBuilder = UserInfoQuestionListDto.builder();

        userInfoQuestionListDtoBuilder.vote(question.getQuestionVotes().size());
        userInfoQuestionListDtoBuilder.questionId(question.getQuestionId());
        userInfoQuestionListDtoBuilder.title(question.getTitle());
        userInfoQuestionListDtoBuilder.createdAt(DateTimeFormatter.ofPattern("yyyy/MM/dd/HH/mm").format(question.getCreatedAt()));
        userInfoQuestionListDtoBuilder.modifiedAt(DateTimeFormatter.ofPattern("yyyy/MM/dd/HH/mm").format(question.getModifiedAt()));

        return userInfoQuestionListDtoBuilder.build();
    }

    default UserInfoAnswerListDto answerToUserInfoAnswerListDto(Answer answer){
        UserInfoAnswerListDto.UserInfoAnswerListDtoBuilder userInfoAnswerListDtoBuilder = UserInfoAnswerListDto.builder();

        //userInfoAnswerListDtoBuilder.vote(answer.getVotes().size());
        userInfoAnswerListDtoBuilder.answerId(answer.getAnswerId());
        userInfoAnswerListDtoBuilder.createAt(DateTimeFormatter.ofPattern("yyyy/MM/dd/HH/mm").format(answer.getCreatedAt()));
        userInfoAnswerListDtoBuilder.modifiedAt(DateTimeFormatter.ofPattern("yyyy/MM/dd/HH/mm").format(answer.getModifiedAt()));
        userInfoAnswerListDtoBuilder.title(answer.getBody());
        userInfoAnswerListDtoBuilder.questionId(answer.getQuestion().getQuestionId());

        return userInfoAnswerListDtoBuilder.build();
    }
    @Mapping(source = "question",target = "questions")
    UserBookMarkQuestionListDto bookmarkQuestionToUserBookMarkQuestionListDto(BookmarkQuestion bookmarkQuestion);

    @Mapping(source = "answer", target = "answers")
    UserBookMarkAnswerListDto bookmarkAnswerToUserBookMarkAnswerListDto(BookmarkAnswer bookmarkAnswer);

    UserInfoResponseDto userToUserInfoResponseDto(User user);

    User userPostToUser (UserPostDto userPostDto);
}
