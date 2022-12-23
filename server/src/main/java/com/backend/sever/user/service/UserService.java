package com.backend.sever.user.service;

import com.backend.sever.config.CustomBeanUtils;
import com.backend.sever.user.entity.User;
import com.backend.sever.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final CustomBeanUtils<User> beanUtils;

    public UserService(UserRepository userRepository, CustomBeanUtils<User> beanUtils) {
        this.userRepository = userRepository;
        this.beanUtils = beanUtils;
    }

    public User findUser(long userId) {
        //스텁으로 진행
        User stubUser = new User("이미지url stub","유저닉네임 stub","유저email stub","유저password stub","유저title stub");
        User stubUser2 = new User("이미지url stub","휴먼A","humanA@gmail.com","1234","휴먼A입니다");
        User stubUser3 = new User("이미지url stub","휴먼B","humanB@gmail.com","1234","휴먼N입니다");
        User stubUser4 = new User("이미지url stub","휴먼C","humanC@gmail.com","1234","휴먼C입니다");



        return null;
    }

    public User updateUser(User user) {
        User findUser = findUser(user.getUserId());

        User updateUser = beanUtils.copyNonNullProperties(user, findUser);

        return userRepository.save(updateUser);
    }
}
