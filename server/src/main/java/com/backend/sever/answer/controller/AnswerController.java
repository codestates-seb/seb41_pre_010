package com.backend.sever.answer.controller;

import com.backend.sever.answer.dto.AnswerPostDto;
import com.backend.sever.answer.dto.AnswerResponseDto;
import com.backend.sever.answer.entity.Answer;
import com.backend.sever.answer.mapper.AnswerMapper;
import com.backend.sever.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/answers")
public class AnswerController {
    private final AnswerMapper answerMapper;
    private final AnswerService answerService;

    public AnswerController(AnswerMapper answerMapper, AnswerService answerService) {
        this.answerMapper = answerMapper;
        this.answerService = answerService;
    }

    @PostMapping
    public ResponseEntity postAnswer(@RequestBody AnswerPostDto answerPostDto){
        Answer answer = answerService.createAnswer(answerMapper.answerPostDtoToAnswer(answerPostDto));
        AnswerResponseDto answerResponse = answerMapper.answerToAnswerResponseDto(answer);

        return new ResponseEntity(answerResponse, HttpStatus.OK);
    }
}
