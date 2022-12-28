package com.backend.sever.user.controller;

import com.backend.sever.jwt.filter.JwtAuthenticationFilter;
import com.backend.sever.jwt.filter.JwtVerificationFilter;
import com.backend.sever.jwt.token.JwtTokenizer;
import com.backend.sever.jwt.utils.UriCreator;
import com.backend.sever.user.dto.UserInfoResponseDto;
import com.backend.sever.user.dto.UserPostDto;
import com.backend.sever.user.dto.UserPutDto;
import com.backend.sever.user.dto.UserResponseDto;
import com.backend.sever.user.entity.User;
import com.backend.sever.user.mapper.UserMapper;
import com.backend.sever.user.service.UserService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URI;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;

    private JwtVerificationFilter jwtVerificationFilter;

    private final JwtTokenizer jwtTokenizer;


//    private JwtAuthenticationFilter jwtAuthenticationFilter;


    public UserController(UserService userService, UserMapper userMapper, JwtVerificationFilter jwtVerificationFilter, JwtTokenizer jwtTokenizer) {
        this.userService = userService;
        this.userMapper = userMapper;
        this.jwtVerificationFilter = jwtVerificationFilter;
        this.jwtTokenizer = jwtTokenizer;
    }

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
    public ResponseEntity postUser(@RequestBody UserPostDto userPostDto,HttpServletResponse response){


        User user = userMapper.userPostToUser(userPostDto);
        user.setProfileImage("https://www.gravatar.com/avatar/8b366b9f59dce8b67557baf97ddb3053?s=192&d=identicon&r=PG&f=1");

//        String accessToken = jwtAuthenticationFilter.delegateAccessToken(user);
//        String refreshToken = jwtAuthenticationFilter.delegateRefreshToken(user);
        User createdUser = userService.createUser(user);

//
//        Cookie cookie = new Cookie("Authorization", accessToken);
//        Cookie cookie_2 = new Cookie("Refresh", refreshToken);
//
//
//
//        cookie.setPath("/");
//        cookie.setMaxAge(1000 * 60 * 60*6);
//
//        cookie.setHttpOnly(true);
//
//        response.addCookie(cookie);
//
//        cookie_2.setPath("/");
//        cookie_2.setMaxAge(1000 * 60 * 60*24);
//
//        cookie_2.setHttpOnly(true);
//
//        response.addCookie(cookie_2);

        URI location = UriCreator.createUri("/api/v1/users", createdUser.getUserId());

        // 토큰 보내주는거 추가



        return ResponseEntity.created(location).build();

//        return new ResponseEntity<>(userMapper.userToUserResponseDto(user), ResponseEntity.created(location).build().getStatusCode());

//        return new ResponseEntity<>( HttpStatus.OK);
    }



    @GetMapping("/access-token")
    public ResponseEntity AccessToken(HttpServletRequest request, HttpServletResponse response){

        Cookie[] cookies = request.getCookies();
        if((cookies != null && cookies.length > 0)){
            System.out.println("pas???");
            try {
                Map<String, Object> fdfdf =  jwtVerificationFilter.verifyJws(request);
                return new ResponseEntity(fdfdf ,  HttpStatus.OK);

            }catch (Exception e){
                return new ResponseEntity( HttpStatus.UNAUTHORIZED );
            }

        }else{
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }



    }

    @GetMapping("/refresh-token")
    public ResponseEntity RefreshToken(HttpServletRequest request, HttpServletResponse response){

        Cookie[] cookies = request.getCookies();

        String RefeshToken = "";
        String AccessToken = "";

        Cookie[] cookie =request.getCookies();

        if(cookie != null && cookie.length > 0) {
            for(Cookie cookieVo : cookie) {

                if(cookieVo.getName().equals("Refresh")){ // 리프레시 토큰을 받아옴
                    RefeshToken =  cookieVo.getValue();
                    break;
                }
                System.out.println(cookieVo.getName() +" :: "+ cookieVo.getValue());
            }
        }


        if((cookies != null && cookies.length > 0)){
            System.out.println("pas???");
            try {
                Map<String, Object> fdfdf =  jwtVerificationFilter.refreshtoken(request,RefeshToken); // 받아온 리프레시 토큰을 쳐널음 -> 안에서 둘이 비교해서 똑같으면 엑세스 토큰 날려줌
                return new ResponseEntity(fdfdf ,  HttpStatus.OK);

            }catch (Exception e){
                return new ResponseEntity( HttpStatus.UNAUTHORIZED );
            }

        }else{
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }



    }


    @PostMapping("/logout")
    public ResponseEntity LogOut (HttpServletRequest request, HttpServletResponse response){

        Cookie[] cookies = request.getCookies();

        if(cookies != null){

            for(int i=0; i < cookies.length; i++){

                // 쿠키의 유효시간을 0으로 설정하여 바로 만료시킨다.
                cookies[i].setValue(null);
                cookies[i].setPath("/");
                cookies[i].setMaxAge(0);
                response.addCookie(cookies[i]);

            }

        }
        return new ResponseEntity( HttpStatus.OK);
    }



}
