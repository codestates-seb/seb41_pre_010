package com.backend.sever.answer.controller;

import com.backend.sever.answer.dto.AnswerPostDto;
import com.backend.sever.answer.dto.AnswerPutDto;
import com.backend.sever.answer.dto.AnswerResponseDto;
import com.backend.sever.answer.entity.Answer;
import com.backend.sever.answer.mapper.AnswerMapper;
import com.backend.sever.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*",allowedHeaders = "*")
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
    public ResponseEntity postAnswer(@RequestBody AnswerPostDto answerPostDto) {
        Answer answer = answerService.createAnswer(answerMapper.answerPostDtoToAnswer(answerPostDto));
        AnswerResponseDto answerResponse = answerMapper.answerToAnswerResponseDto(answer);

        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/{answer-id}")
    public ResponseEntity putAnswer(@RequestBody AnswerPutDto answerPutDto,
                                    @PathVariable("answer-id") long answerId) {
        answerPutDto.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(answerMapper.answerPutDtoAnswer(answerPutDto));
        AnswerResponseDto answerResponse = answerMapper.answerToAnswerResponseDto(answer);

        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/{answer-id}/edit")
    public ResponseEntity getAnswer(@PathVariable("answer-id") long answerId) {
        AnswerResponseDto answerResponse = answerMapper.answerToAnswerResponseDto(answerService.findAnswer(answerId));

        return new ResponseEntity(answerResponse, HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId) {
        answerService.deleteAnswer(answerId);

        return new ResponseEntity(HttpStatus.OK);
    }
}
