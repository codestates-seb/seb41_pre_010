package com.backend.sever.question.controller;

import com.backend.sever.question.dto.QuestionPostDto;
import com.backend.sever.question.entity.Question;
import com.backend.sever.question.mapper.QuestionMapper;
import com.backend.sever.question.service.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/questions")
public class QuestionController {
    private final QuestionMapper mapper;
    private final QuestionService questionService;

    public QuestionController(QuestionMapper mapper, QuestionService questionService) {
        this.mapper = mapper;
        this.questionService = questionService;
    }
    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionPostDto questionPostDto) {
        Question question = mapper.questionPostDtoToQuestion(questionPostDto);
        Question createdQuestion = questionService.createQuestion(question);

        return new ResponseEntity<> (createdQuestion, HttpStatus.CREATED);
    }
}
