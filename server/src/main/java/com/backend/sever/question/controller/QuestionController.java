package com.backend.sever.question.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/questions")
public class QuestionController {
    @PostMapping
    public ResponseEntity postQuestion() {

        return new ResponseEntity<> (HttpStatus.CREATED);
    }
}
