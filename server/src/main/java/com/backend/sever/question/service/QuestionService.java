package com.backend.sever.question.service;

import com.backend.sever.config.CustomBeanUtils;
import com.backend.sever.question.entity.Question;
import com.backend.sever.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final CustomBeanUtils<Question> customBeanUtils;

    public QuestionService(QuestionRepository questionRepository, CustomBeanUtils<Question> customBeanUtils) {
        this.questionRepository = questionRepository;
        this.customBeanUtils = customBeanUtils;
    }
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Question findQuestion(long questionId) {
        Optional optionalQuestion = questionRepository.findById(questionId);
        return verifyQuestion(optionalQuestion);
    }

    public Question updateQuestion(Question question) {
        Optional<Question> findQuestion = questionRepository.findById(question.getQuestionId());
        Question verifiedQuestion = verifyQuestion(findQuestion);
        Question updatedQuestion = customBeanUtils.copyNonNullProperties(question, verifiedQuestion);

        return questionRepository.save(updatedQuestion);
    }

    public void deleteQuestion(long questionId) {
        questionRepository.deleteById(questionId);

    }

    private Question verifyQuestion(Optional<Question> optionalQuestion) {
        return optionalQuestion.orElseThrow(() -> new RuntimeException());
    }
}
