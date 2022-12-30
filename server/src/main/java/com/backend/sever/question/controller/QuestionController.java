package com.backend.sever.question.controller;

import com.backend.sever.answer.entity.Answer;
import com.backend.sever.question.dto.QuestionInfoResponseDto;
import com.backend.sever.question.dto.QuestionPostDto;
import com.backend.sever.question.dto.QuestionPutDto;
import com.backend.sever.question.entity.Question;
import com.backend.sever.question.mapper.QuestionMapper;
import com.backend.sever.question.service.QuestionService;
import org.springframework.data.domain.Page;
import com.backend.sever.user.entity.User;
import com.backend.sever.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.List;

@RestController
@RequestMapping("api/v1/questions")
public class QuestionController {
    private final QuestionMapper mapper;
    private final QuestionService questionService;
    private final UserService userService;

    public QuestionController(QuestionMapper mapper, QuestionService questionService, UserService userService) {
        this.mapper = mapper;
        this.questionService = questionService;
        this.userService = userService;
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

        if (keyword.isPresent()) {
            questionPage = questionService.findAllQuestions(pageIndex - 1, pageSize, filter, keyword.get());
        } else {
            questionPage = questionService.findAllQuestions(pageIndex - 1, pageSize, filter);
        }

        return new ResponseEntity<>(mapper.questionInfosToPageResponseDto(questionPage), HttpStatus.OK);
    }

    @GetMapping("{question-id}/{user-id}")
    public ResponseEntity getQuestionInfo(@PathVariable("question-id") long questionId,
                                          @PathVariable("user-id") long userId ) {
        Question question = questionService.findQuestion(questionId);
        User user = userService.findUser(userId);
        List<Answer> answers = question.getAnswers();
        QuestionInfoResponseDto response = mapper.questionToQuestionInfoDto(question);
        List<Boolean> check = questionService.findCheck(questionId, userId);
        response.setVoteUpCheck(check.get(0));
        response.setVoteDownCheck(check.get(1));
        response.setBookMarkCheck(questionService.findBookmarkCheck(questionId,userId));

        List<Boolean> answerBookmark = questionService.findAnswerBookmark(question, userId);
        List<Boolean> answerVoteCheck = questionService.findAnswerVoteCheck(answers, user);
        int idx = 0;
        for (int i = 0; i < response.getAnswers().size(); i++) {
            response.getAnswers().get(i).setBookMarkCheck(answerBookmark.get(i));
            response.getAnswers().get(i).setVoteUpCheck(answerVoteCheck.get(idx));
            response.getAnswers().get(i).setVoteDownCheck(answerVoteCheck.get(idx + 1));
            idx += 2;
        }
        return new ResponseEntity(response,HttpStatus.OK);

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
