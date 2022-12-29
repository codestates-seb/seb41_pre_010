package com.backend.sever.question.service;

import com.backend.sever.bookmark.entity.BookmarkQuestion;
import com.backend.sever.bookmark.repository.BookmarkQuestionRepository;
import com.backend.sever.config.CustomBeanUtils;
import com.backend.sever.question.entity.Question;
import com.backend.sever.question.repository.QuestionRepository;
import com.backend.sever.user.entity.User;
import com.backend.sever.user.service.UserService;
import com.backend.sever.vote.entity.QuestionVote;
import com.backend.sever.vote.repository.QuestionVoteRepository;
import org.springframework.stereotype.Service;

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

    public QuestionService(QuestionRepository questionRepository, CustomBeanUtils<Question> customBeanUtils, QuestionVoteRepository questionVoteRepository, UserService userService, BookmarkQuestionRepository bookmarkQuestionRepository) {
        this.questionRepository = questionRepository;
        this.customBeanUtils = customBeanUtils;
        this.questionVoteRepository = questionVoteRepository;
        this.userService = userService;
        this.bookmarkQuestionRepository = bookmarkQuestionRepository;
    }

    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Question findQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        return verifyQuestion(optionalQuestion);
    }

    public Question updateQuestion(Question question) {
        Question verifiedQuestion = verifyQuestion(questionRepository.findById(question.getQuestionId()));
        Optional.ofNullable(question.getTitle()).ifPresent(title -> verifiedQuestion.setTitle(title));
        Optional.ofNullable(question.getBody()).ifPresent(body -> verifiedQuestion.setBody(body));

        List<Long> questionTagIds = questionRepository.findQuestionTagIdByQuestionId(question.getQuestionId());

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
}