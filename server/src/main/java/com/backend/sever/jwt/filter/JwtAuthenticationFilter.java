package com.backend.sever.jwt.filter;

import com.backend.sever.user.entity.User;
import com.backend.sever.jwt.token.JwtTokenizer;
import com.backend.sever.jwt.dto.LoginDto;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import lombok.SneakyThrows;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Cookie;




public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenizer jwtTokenizer;




    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtTokenizer jwtTokenizer) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenizer = jwtTokenizer;
    }

    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request , HttpServletResponse response){

        ObjectMapper objectMapper = new ObjectMapper();
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);


        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());
        System.out.println(authenticationToken);
        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult)throws ServletException, IOException {
        User user = (User) authResult.getPrincipal();

        String accessToken = delegateAccessToken(user);
        String refreshToken = delegateRefreshToken(user);


//        response.setHeader("Authorization", "Bearer " + accessToken);
//        response.setHeader("Refresh", refreshToken);
        response.setStatus(200);

        // 쿠키 만드는 거 .

        Cookie cookie = new Cookie("Authorization", accessToken);
        Cookie cookie_2 = new Cookie("Refresh", refreshToken);



        cookie.setPath("/");
        cookie.setMaxAge(1000 * 60 * 60*6);

        cookie.setHttpOnly(true);

        response.addCookie(cookie);

        cookie_2.setPath("/");
        cookie_2.setMaxAge(1000 * 60 * 60*24);

        cookie_2.setHttpOnly(true);

        response.addCookie(cookie_2);




        this.getSuccessHandler().onAuthenticationSuccess(request,response,authResult);

    }


    private String delegateAccessToken(User user){



        Map<String, Object> claims = new HashMap<>();
        claims.put("email", user.getEmail());
        claims.put("roles", user.getRoles());
        claims.put("displayName", user.getDisplayName());
        claims.put("userId", user.getUserId());
        claims.put("profileImage", user.getProfileImage());

        String subject = user.getEmail();

        System.out.println(user.getProfileImage());
        System.out.println(user.getDisplayName());

        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;

    }


    private String delegateRefreshToken(User user){
        String subject = user.getEmail();

        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey =jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);

        return refreshToken;

    }

    public void GetToken (
                          HttpServletResponse response,
                          Authentication authResult){
        User user = (User) authResult.getPrincipal();

        String accessToken = delegateAccessToken(user);
        String refreshToken = delegateRefreshToken(user);

        Cookie cookie = new Cookie("Authorization", accessToken);
        Cookie cookie_2 = new Cookie("Refresh", refreshToken);



        cookie.setPath("/");
        cookie.setMaxAge(1000 * 60 * 60*6);

        cookie.setHttpOnly(true);

        response.addCookie(cookie);

        cookie_2.setPath("/");
        cookie_2.setMaxAge(1000 * 60 * 60*24);

        cookie_2.setHttpOnly(true);

        response.addCookie(cookie_2);

    }
}
