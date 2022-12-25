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

    public User createUser(User user){
        verifyExistsEmail(user.getEmail());
        // 비밀번호 암호화
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        // DB에 USER ROLE 저장
        List<String> roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

        User savedUser =userRepository.save(user);

        publisher.publishEvent(new UserRegistrationApplicationEvent(savedUser));
        return savedUser;


    }


    private  void verifyExistsEmail (String email){

        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()){
            throw  new RuntimeException(); // 비즈니스 로직 예외 던지기로 수정 예정

        }
    }


}
