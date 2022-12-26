package com.backend.sever.jwt.dto;
import lombok.Getter;
public enum ExceptionCode {

    USER_NOT_FOUND(404, "User not found"),

    USER_EXISTS(409, "중복된 이메일 주소입니다.");

    @Getter
    private int status;

    @Getter
    private String message;


    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
