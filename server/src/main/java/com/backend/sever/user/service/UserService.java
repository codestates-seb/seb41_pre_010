package com.backend.sever.user.service;

import com.backend.sever.user.entity.User;
import com.backend.sever.user.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findUser(long userId) {
        //스텁으로 진행
        User stubUser = new User(1L,"이미지url stub","유저 닉네임 stub","유저 email stub","유저 title stub");

        return stubUser;
    }
}