package com.backend.sever.question.service;

import com.backend.sever.question.entity.Question;
import com.backend.sever.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }
    private Question createQuestion(Question question) {
        return questionRepository.save(question);
    }
}
