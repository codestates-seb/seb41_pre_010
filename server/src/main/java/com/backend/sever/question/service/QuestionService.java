package com.backend.sever.question.service;

import com.backend.sever.config.CustomBeanUtils;
import com.backend.sever.question.entity.Question;
import com.backend.sever.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final CustomBeanUtils<Question> customBeanUtils;

    public QuestionService(QuestionRepository questionRepository, CustomBeanUtils<Question> customBeanUtils) {
        this.questionRepository = questionRepository;
        this.customBeanUtils = customBeanUtils;
    }
    public Question createQuestion(Question question) {
        if(questionRepository.countTag() == 0) {
            throw new RuntimeException();
        }
        return questionRepository.save(question);
    }

    public Question findQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        return verifyQuestion(optionalQuestion);
    }

    public Page<Question> findAllQuestions(int pageIndex, int pageSize, String filter) {
        String filterType = filter.equals("newest") ? "questionId" : "vote";

        return questionRepository.findAll(PageRequest.of(pageIndex, pageSize, Sort.by(filterType).descending()));
    }

    public Page<Question> findAllQuestions(int pageIndex, int pageSize, String filter, String keyword) {
        String filterType = filter.equals("newest") ? "questionId" : "vote";

        List<String> keywords = Arrays.asList(keyword.split("\\s"));

        Set<Long> questionIds = new HashSet<>();

        keywords.forEach(word -> {
            questionIds.addAll(questionRepository.findQuestionIdByKeywordInQuestionTable(word));
            questionIds.addAll(questionRepository.findQuestionIdByKeywordInTagTable(word));
            questionIds.addAll(questionRepository.findQuestionIdByKeywordInUserTable(word));
        });

        return questionRepository.makePageByQuestionId(questionIds, PageRequest.of(pageIndex, pageSize, Sort.by(filterType).descending()));
    }


    public Question updateQuestion(Question question) {
        Question verifiedQuestion = verifyQuestion(questionRepository.findById(question.getQuestionId()));
        Optional.ofNullable(question.getTitle()).ifPresent(title -> verifiedQuestion.setTitle(title));
        Optional.ofNullable(question.getBody()).ifPresent(body -> verifiedQuestion.setBody(body));
        Optional.ofNullable(question.getBodyString()).ifPresent(bodyString -> verifiedQuestion.setBodyString(bodyString));

        Optional<List<Long>> optionalQuestionTagIds = questionRepository.findQuestionTagIdByQuestionId(question.getQuestionId());
        List<Long> questionTagIds = optionalQuestionTagIds.orElseThrow(() -> new RuntimeException());

        int questionTagIndex = 0;

        if(question.getQuestionTags().size() >= verifiedQuestion.getQuestionTags().size()) {
            for(int i=0; i<verifiedQuestion.getQuestionTags().size(); i++) {
                question.getQuestionTags().get(i).setQuestionTagId(questionTagIds.get(questionTagIndex));
                questionTagIndex++;
            }
        } else {
            for(int i=0; i<verifiedQuestion.getQuestionTags().size(); i++) {
                if(i > question.getQuestionTags().size()-1) {
                    questionRepository.deleteQuestionTagIdById(questionTagIds.get(i));
                } else {
                    question.getQuestionTags().get(i).setQuestionTagId(questionTagIds.get(questionTagIndex));
                    questionTagIndex++;
                }
            }
        }

        Optional.ofNullable(question.getQuestionTags()).ifPresent(questionTags -> verifiedQuestion.setQuestionTags(question.getQuestionTags()));

        return questionRepository.save(verifiedQuestion);
    }

    public void deleteQuestion(long questionId) {
        questionRepository.deleteById(questionId);

    }

    private Question verifyQuestion(Optional<Question> optionalQuestion) {
        return optionalQuestion.orElseThrow(() -> new RuntimeException());
    }
}