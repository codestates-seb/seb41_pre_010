package com.backend.sever.question.controller;

import com.backend.sever.question.dto.QuestionPostDto;
import com.backend.sever.question.dto.QuestionPutDto;
import com.backend.sever.question.entity.Question;
import com.backend.sever.question.mapper.QuestionMapper;
import com.backend.sever.question.service.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));

        return new ResponseEntity<> (mapper.questionToQuestionResponseDto(question), HttpStatus.CREATED);
    }

    @GetMapping("/{question-id}/edit")
    public ResponseEntity getQuestion(@PathVariable("question-id") long questionId) {
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<> (mapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

    @PutMapping("/{question-id}")
    public ResponseEntity putQuestion(@PathVariable("question-id") long questionId,
                                      @RequestBody QuestionPutDto questionPutDto) {
        Question question = questionService.updateQuestion(mapper.questionPutDtoToQuestion(questionPutDto));

        return new ResponseEntity<> (mapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

}
