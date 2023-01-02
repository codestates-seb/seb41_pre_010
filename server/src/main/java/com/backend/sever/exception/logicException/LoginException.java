package com.backend.sever.exception.logicException;

import lombok.Getter;

public class LoginException extends RuntimeException {
    @Getter
    private  ExceptionCode exceptionCode;

    public LoginException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
