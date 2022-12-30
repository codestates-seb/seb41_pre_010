package com.backend.sever.question.service;

import com.backend.exception.logicException.ExceptionCode;
import com.backend.exception.logicException.LoginException;
import com.backend.sever.answer.entity.Answer;
import com.backend.sever.bookmark.entity.BookmarkAnswer;
import com.backend.sever.bookmark.entity.BookmarkQuestion;
import com.backend.sever.bookmark.repository.BookmarkAnswerRepository;
import com.backend.sever.bookmark.repository.BookmarkQuestionRepository;
import com.backend.sever.config.CustomBeanUtils;
import com.backend.sever.question.entity.Question;
import com.backend.sever.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.*;
import com.backend.sever.user.entity.User;
import com.backend.sever.user.service.UserService;
import com.backend.sever.vote.entity.AnswerVote;
import com.backend.sever.vote.entity.QuestionVote;
import com.backend.sever.vote.repository.AnswerVoteRepository;
import com.backend.sever.vote.repository.QuestionVoteRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final CustomBeanUtils<Question> customBeanUtils;
    private final QuestionVoteRepository questionVoteRepository;
    private final UserService userService;
    private final BookmarkQuestionRepository bookmarkQuestionRepository;
    private final BookmarkAnswerRepository bookmarkAnswerRepository;
    private final AnswerVoteRepository answerVoteRepository;

    public QuestionService(QuestionRepository questionRepository, CustomBeanUtils<Question> customBeanUtils, QuestionVoteRepository questionVoteRepository, UserService userService, BookmarkQuestionRepository bookmarkQuestionRepository, BookmarkAnswerRepository bookmarkAnswerRepository, AnswerVoteRepository answerVoteRepository) {
        this.questionRepository = questionRepository;
        this.customBeanUtils = customBeanUtils;
        this.questionVoteRepository = questionVoteRepository;
        this.userService = userService;
        this.bookmarkQuestionRepository = bookmarkQuestionRepository;
        this.bookmarkAnswerRepository = bookmarkAnswerRepository;
        this.answerVoteRepository = answerVoteRepository;
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
        return optionalQuestion.orElseThrow(() -> new LoginException(ExceptionCode.QUESTION_NOT_FOUND));
    }

    public List<Boolean> findCheck(long questionId,long userId) {
        List<Boolean> voteChecks = new ArrayList<>();
        User user = userService.findUser(userId);
        Question question = findQuestion(questionId);

        Optional<QuestionVote> questionVote = questionVoteRepository.findByQuestionAndUser(question, user);
        if (questionVote.isPresent()) {
            voteChecks.add(questionVote.get().isVoteUpCheck());
            voteChecks.add(questionVote.get().isVoteDownCheck());
        }else {
            voteChecks.add(false);
            voteChecks.add(false);
        }
        return voteChecks;
    }

    public boolean findBookmarkCheck(long questionId, long userId) {
        User user = userService.findUser(userId);
        Question question = findQuestion(questionId);

        Optional<BookmarkQuestion> optionalBookmarkQuestion = bookmarkQuestionRepository.findByQuestionAndUser(question, user);
        return optionalBookmarkQuestion.map(BookmarkQuestion::isBookmarkCheck).orElse(false);
    }

    public List<Boolean> findAnswerBookmark (Question question, long userId) {
        List<Answer> answers = question.getAnswers();
        User user = userService.findUser(userId);
        List<Boolean> bookmarkCheck = new ArrayList<>();

        for (int i = 0; i < answers.size(); i++) {
            Optional<BookmarkAnswer> optionalBookmarkAnswer = bookmarkAnswerRepository.findByAnswerAndUser(answers.get(i), user);
            if (optionalBookmarkAnswer.isPresent()) {
                bookmarkCheck.add(optionalBookmarkAnswer.get().isBookmarkCheck());
            }
            else {
                bookmarkCheck.add(false);
            }
        }
        return bookmarkCheck;
    }

    public List<Boolean> findAnswerVoteCheck(List<Answer> answers, User user) {
        List<Boolean> answerVoteCheck = new ArrayList<>();
        for (int i = 0; i < answers.size(); i++) {
            Optional<AnswerVote> optionalAnswerVote = answerVoteRepository.findByAnswerAndUser(answers.get(i), user);
            if (optionalAnswerVote.isPresent()) {
                answerVoteCheck.add(optionalAnswerVote.get().isVoteUpCheck());
                answerVoteCheck.add(optionalAnswerVote.get().isVoteDownCheck());
            }else{
                answerVoteCheck.add(false);
                answerVoteCheck.add(false);
            }
        }
        return answerVoteCheck;
    }
}