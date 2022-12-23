package com.backend.sever.user.mapper;

import com.backend.sever.question.entity.Question;
import com.backend.sever.user.dto.UserInfoQuestionListDto;
import com.backend.sever.user.dto.UserInfoResponseDto;
import com.backend.sever.user.dto.UserPutDto;
import com.backend.sever.user.dto.UserResponseDto;
import com.backend.sever.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.time.format.DateTimeFormatter;
import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserResponseDto userToUserResponseDto(User user);

    User userPutToDtoToUser(UserPutDto userPutDto);

    default UserInfoQuestionListDto questionToUserInfoQuestionListDto(Question question) {
        UserInfoQuestionListDto.UserInfoQuestionListDtoBuilder userInfoQuestionListDtoBuilder = UserInfoQuestionListDto.builder();
        userInfoQuestionListDtoBuilder.vote(question.getVotes().size());
        userInfoQuestionListDtoBuilder.questionId(question.getQuestionId());
        userInfoQuestionListDtoBuilder.title(question.getTitle());
        userInfoQuestionListDtoBuilder.createdAt(DateTimeFormatter.ISO_LOCAL_DATE_TIME.format(question.getCreatedAt()));
        userInfoQuestionListDtoBuilder.modifiedAt(DateTimeFormatter.ISO_LOCAL_DATE_TIME.format(question.getModifiedAt()));

        return userInfoQuestionListDtoBuilder.build();
    }

    UserInfoResponseDto userToUserInfoResponseDto(User user);

    List<UserInfoResponseDto> questionToUserInfoResponseDtoList(List<Question> questions);
}
