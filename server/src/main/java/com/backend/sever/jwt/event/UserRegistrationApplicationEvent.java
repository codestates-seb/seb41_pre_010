package com.backend.sever.jwt.event;

import com.backend.sever.user.entity.User;

public class UserRegistrationApplicationEvent {

    private User user;

    public UserRegistrationApplicationEvent(User user){
        this.user = user;
    }
}
