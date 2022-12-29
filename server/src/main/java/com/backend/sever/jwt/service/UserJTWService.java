package com.backend.sever.jwt.service;

import com.backend.sever.jwt.event.UserRegistrationApplicationEvent;
import com.backend.sever.jwt.utils.CustomAuthorityUtils;
import com.backend.sever.user.entity.User;
import com.backend.sever.user.repository.UserRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class UserJTWService {

    private final UserRepository userRepository;
    private final ApplicationEventPublisher publisher;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;


    public UserJTWService(UserRepository userRepository,
                       ApplicationEventPublisher publisher,
                       PasswordEncoder passwordEncoder,
                       CustomAuthorityUtils authorityUtils){
        this.userRepository = userRepository;
        this.publisher= publisher;
        this.passwordEncoder =passwordEncoder;
        this.authorityUtils = authorityUtils;

    }

}
