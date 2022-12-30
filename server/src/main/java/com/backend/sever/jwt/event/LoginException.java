package com.backend.sever.jwt.event;

import com.backend.sever.jwt.dto.ExceptionCode;
import lombok.Getter;

public class LoginException extends RuntimeException {
    @Getter
    private  ExceptionCode exceptionCode;

    public LoginException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
