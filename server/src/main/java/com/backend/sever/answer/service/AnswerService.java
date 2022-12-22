package com.backend.sever.answer.service;

import com.backend.sever.answer.entity.Answer;
import com.backend.sever.answer.repository.AnswerRepository;
import com.backend.sever.config.CustomBeanUtils;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final CustomBeanUtils<Answer> beanUtils;

    public AnswerService(AnswerRepository answerRepository, CustomBeanUtils<Answer> beanUtils) {
        this.answerRepository = answerRepository;
        this.beanUtils = beanUtils;
    }

    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        return null;
    }

    public Answer findAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);

        //임시로 런타임에러 발생
        return optionalAnswer.orElseThrow(() ->
                new RuntimeException());
    }
}
