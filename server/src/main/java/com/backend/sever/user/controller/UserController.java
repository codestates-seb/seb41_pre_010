package com.backend.sever.user.controller;

import com.backend.sever.user.dto.UserResponseDto;
import com.backend.sever.user.mapper.UserMapper;
import com.backend.sever.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;

    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @GetMapping("/{user-id}/userprofile")
    public ResponseEntity getUser(@PathVariable("user-id") long userId) {
        UserResponseDto userResponse = userMapper.userToUserResponseDto(userService.findUser(userId));

        return new ResponseEntity(userResponse, HttpStatus.OK);
    }
}
