package com.backend.sever.question.controller;

import com.backend.sever.question.dto.QuestionPostDto;
import com.backend.sever.question.dto.QuestionPutDto;
import com.backend.sever.question.entity.Question;
import com.backend.sever.question.mapper.QuestionMapper;
import com.backend.sever.question.service.QuestionService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

        return new ResponseEntity<> (HttpStatus.OK);
    }

    @GetMapping("/{question-id}/edit")
    public ResponseEntity getQuestion(@PathVariable("question-id") long questionId) {
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<> (mapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity searchQuestion(@RequestParam("q") Optional<String> keyword,
                                         @RequestParam("tab") String filter,
                                         @RequestParam("page") int pageIndex,
                                         @RequestParam("pageSize") int pageSize) {

        Page<Question> questionPage;

        if(keyword.isPresent()) {
            questionPage = questionService.findAllQuestions(pageIndex - 1, pageSize, filter, keyword.get());
        } else {
            questionPage = questionService.findAllQuestions(pageIndex - 1, pageSize, filter);
        }

         return new ResponseEntity<>(mapper.questionInfosToPageResponseDto(questionPage), HttpStatus.OK);
    }

    @PutMapping("/{question-id}")
    public ResponseEntity putQuestion(@PathVariable("question-id") long questionId,
                                      @RequestBody QuestionPutDto questionPutDto) {
        Question question = mapper.questionPutDtoToQuestion(questionPutDto);
        question.setQuestionId(questionId);
        Question updatedQuestion = questionService.updateQuestion(question);

        return new ResponseEntity<> (mapper.questionToQuestionResponseDto(updatedQuestion), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") long questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity<> (HttpStatus.OK);
    }

}
