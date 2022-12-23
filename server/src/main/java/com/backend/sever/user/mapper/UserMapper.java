package com.backend.sever.user.mapper;

import com.backend.sever.user.dto.UserResponseDto;
import com.backend.sever.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserResponseDto userToUserResponseDto(User user);
}
