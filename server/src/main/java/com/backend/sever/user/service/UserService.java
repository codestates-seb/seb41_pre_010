package com.backend.sever.user.service;

import com.backend.sever.config.CustomBeanUtils;
import com.backend.sever.jwt.utils.CustomAuthorityUtils;
import com.backend.sever.user.entity.User;
import com.backend.sever.user.repository.UserRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

// 사용자 로그인을 위한 요소 임포트


import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final CustomBeanUtils<User> beanUtils;

    // 사용자 로그인을 위한 클래스 DI




    public UserService(UserRepository userRepository, CustomBeanUtils<User> beanUtils) {
        this.userRepository = userRepository;
        this.beanUtils = beanUtils;
    }



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
}
