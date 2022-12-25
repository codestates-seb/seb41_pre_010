package com.backend.sever.user.mapper;

import com.backend.sever.user.dto.UserPostDto;
import com.backend.sever.user.dto.UserPutDto;
import com.backend.sever.user.dto.UserResponseDto;
import com.backend.sever.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserResponseDto userToUserResponseDto(User user);

    User userPutToDtoToUser(UserPutDto userPutDto);

    // 회원 가입을 위해 추가
    User userPostToUser (UserPostDto userPostDto);
}
