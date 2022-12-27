package com.backend.sever.user.controller;

//import com.backend.sever.jwt.filter.JwtAuthenticationFilter;
import com.backend.sever.jwt.filter.JwtAuthenticationFilter;
import com.backend.sever.jwt.token.JwtTokenizer;
import com.backend.sever.jwt.utils.UriCreator;
import com.backend.sever.user.dto.UserInfoResponseDto;
import com.backend.sever.user.dto.UserPostDto;
import com.backend.sever.user.dto.UserPutDto;
import com.backend.sever.user.dto.UserResponseDto;
import com.backend.sever.user.entity.User;
import com.backend.sever.user.mapper.UserMapper;
import com.backend.sever.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;



//    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    private final JwtTokenizer jwtTokenizer;


//    public UserController(UserService userService, UserMapper userMapper) {
//        this.userService = userService;
//        this.userMapper = userMapper;
//    }


    public UserController(UserService userService, UserMapper userMapper, JwtTokenizer jwtTokenizer) {
        this.userService = userService;
        this.userMapper = userMapper;
        this.jwtTokenizer = jwtTokenizer;
    }


//    public UserController(UserService userService, UserMapper userMapper, JwtAuthenticationFilter jwtAuthenticationFilter, JwtTokenizer jwtTokenizer) {
//        this.userService = userService;
//        this.userMapper = userMapper;
//        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
//        this.jwtTokenizer = jwtTokenizer;
//    }

    @GetMapping("/{user-id}/userprofile")
    public ResponseEntity getUser(@PathVariable("user-id") long userId) {
        UserResponseDto userResponse = userMapper.userToUserResponseDto(userService.findUser(userId));

        return new ResponseEntity(userResponse, HttpStatus.OK);
    }

    @GetMapping("/{user-id}/userinfo")
    public ResponseEntity getUserInfo(@PathVariable("user-id") long userId) {
        User user =  userService.findUser(userId);
        UserInfoResponseDto userInfoResponseDto = userMapper.userToUserInfoResponseDto(user);
        return new ResponseEntity(userInfoResponseDto,HttpStatus.OK);
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

    @PostMapping("/signup")
    public ResponseEntity postUser(@RequestBody UserPostDto userPostDto){
        User user = userMapper.userPostToUser(userPostDto);


        User createdUser = userService.createUser(user);
        URI location = UriCreator.createUri("/api/v1/users", createdUser.getUserId());

        return ResponseEntity.created(location).build();



//        return new ResponseEntity<>(userMapper.userToUserResponseDto(user), ResponseEntity.created(location).build().getStatusCode());

//        return new ResponseEntity<>( HttpStatus.OK);
    }



    @PostMapping("/{user-id}/access-token")
    public ResponseEntity AccessToken(HttpServletRequest request,@PathVariable("user-id") long userId ){

        String jws = request.getHeader("Authorization").replace("Bearer ", ""); // 헤더에서 가져온 토큰

        User user = userService.findUser(userId);

        // 현재의 토큰을 가져와서 비교 해야함
        // 비교 후 유저에 맞는 토큰 검사 해야댐

        return new ResponseEntity(userMapper.userToUserResponseDto(user), HttpStatus.OK);

    }

    @PostMapping("refresh-token")
    public ResponseEntity RefreshToken(HttpServletRequest request ){

        String jws = request.getHeader("Refresh"); // 헤더에서 가져온 토큰

        // 현재의 토큰을 가져와서 비교 해야함
        // 비교 후 유저에 맞는 토큰 검사 해야댐


        return new ResponseEntity(jws, HttpStatus.OK);

    }
}
