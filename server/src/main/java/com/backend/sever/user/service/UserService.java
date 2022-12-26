package com.backend.sever.user.service;

import com.backend.sever.config.CustomBeanUtils;
import com.backend.sever.jwt.dto.ExceptionCode;
import com.backend.sever.jwt.event.LoginException;
import com.backend.sever.jwt.event.UserRegistrationApplicationEvent;
import com.backend.sever.jwt.utils.CustomAuthorityUtils;
import com.backend.sever.user.entity.User;
import com.backend.sever.user.repository.UserRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

// 사용자 로그인을 위한 요소 임포트


import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final CustomBeanUtils<User> beanUtils;

    // 사용자 로그인을 위한 클래스 DI
    private final ApplicationEventPublisher publisher;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public UserService(UserRepository userRepository, CustomBeanUtils<User> beanUtils, ApplicationEventPublisher publisher, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.beanUtils = beanUtils;
        this.publisher = publisher;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

//    public UserService(UserRepository userRepository, CustomBeanUtils<User> beanUtils) {
//        this.userRepository = userRepository;
//        this.beanUtils = beanUtils;
//    }



    public User findUser(long userId) {
        User findUser = verifiedUser(userId);

        return findUser;
    }

    public User updateUser(User user) {
        User findUser = findUser(user.getUserId());

        User updateUser = beanUtils.copyNonNullProperties(user, findUser);

        return userRepository.save(updateUser);
    }

    public User verifiedUser(long userId) {
        Optional<User> findUser = userRepository.findById(userId);

        return findUser.orElseThrow(() ->
                new RuntimeException());
    }


    // 회원 가입을 위한 createUser

    public User createUser(User user){
        verifyExistsEmail(user.getEmail());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

        User savedUser = userRepository.save(user);


        publisher.publishEvent(new UserRegistrationApplicationEvent(savedUser));
        return savedUser;
    }

    private void verifyExistsEmail (String email){

        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()){
            throw  new LoginException(ExceptionCode.USER_EXISTS); // 비즈니스 로직 예외 던지기로 수정 예정

        }
    }
}
