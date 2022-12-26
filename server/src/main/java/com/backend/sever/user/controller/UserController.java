package com.backend.sever.user.controller;

import com.backend.sever.jwt.service.UserJTWService;
import com.backend.sever.jwt.utils.UriCreator;
import com.backend.sever.user.dto.UserPostDto;
import com.backend.sever.user.dto.UserPutDto;
import com.backend.sever.user.dto.UserResponseDto;
import com.backend.sever.user.entity.User;
import com.backend.sever.user.mapper.UserMapper;
import com.backend.sever.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.net.URI;

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

    @PutMapping("/{user-id}/userprofile")
    public ResponseEntity putUser(@PathVariable("user-id") long userId,
                                  @RequestBody UserPutDto userPutDto) {
        userPutDto.setUserId(userId);
        User user = userService.updateUser(userMapper.userPutToDtoToUser(userPutDto));
        //값 확인용 response 데이터 추후 삭제 예정
        UserResponseDto userResponse = userMapper.userToUserResponseDto(user);

        return new ResponseEntity(userResponse, HttpStatus.OK);
    }


    @PostMapping()
    public ResponseEntity postUser(@RequestBody UserPostDto userPostDto){
        User user = userMapper.userPostToUser(userPostDto);

        User createdUser = userService.createUser(user);
        URI location = UriCreator.createUri("/api/v1/users", createdUser.getUserId());

        return ResponseEntity.created(location).build();

    }



}
