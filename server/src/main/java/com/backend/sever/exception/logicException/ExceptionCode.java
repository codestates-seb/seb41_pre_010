package com.backend.sever.exception.logicException;
import lombok.Getter;
public enum ExceptionCode {

    USER_NOT_FOUND(404, "유저를 찾을 수 없습니다."),
    USER_EXISTS(409, "중복된 이메일 주소입니다."),
    QUESTION_NOT_FOUND(404,"질문을 찾을 수 없습니다."),
    COMMENTS_NOT_FOUND(404,"코멘트를 찾을 수 없습니다."),
    ANSWER_NOT_FOUND(404, "답변을 찾을 수 없습니다.");

    @Getter
    private final int status;

    @Getter
    private final String message;


    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
