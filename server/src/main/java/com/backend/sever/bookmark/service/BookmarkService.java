package com.backend.sever.bookmark.service;

import com.backend.sever.answer.entity.Answer;
import com.backend.sever.answer.service.AnswerService;
import com.backend.sever.bookmark.entity.BookmarkAnswer;
import com.backend.sever.bookmark.entity.BookmarkQuestion;
import com.backend.sever.bookmark.repository.BookmarkAnswerRepository;
import com.backend.sever.bookmark.repository.BookmarkQuestionRepository;
import com.backend.sever.question.entity.Question;
import com.backend.sever.question.service.QuestionService;
import com.backend.sever.user.entity.User;
import com.backend.sever.user.service.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookmarkService {
    private final BookmarkAnswerRepository bookmarkAnswerRepository;
    private final BookmarkQuestionRepository bookmarkQuestionRepository;
    private final UserService userService;
    private final QuestionService questionService;
    private final AnswerService answerService;

    public BookmarkService(BookmarkAnswerRepository bookmarkAnswerRepository, BookmarkQuestionRepository bookmarkQuestionRepository, UserService userService, QuestionService questionService, AnswerService answerService) {
        this.bookmarkAnswerRepository = bookmarkAnswerRepository;
        this.bookmarkQuestionRepository = bookmarkQuestionRepository;
        this.userService = userService;
        this.questionService = questionService;
        this.answerService = answerService;
    }

    public BookmarkAnswer updateBookmarkAnswer(BookmarkAnswer bookmark) {
        BookmarkAnswer bookmarkAnswer = getBookmark(bookmark);
        //true일 때 요청 -> false
        if (bookmarkAnswer.isBookmarkCheck()) {
            return bookmarkUnCheck(bookmarkAnswer);
            //false or null일 때 요청 -> true
        } else {
            return bookmarkCheck(bookmarkAnswer);
        }
    }

    private BookmarkAnswer bookmarkCheck(BookmarkAnswer bookmark) {
        bookmark.setBookmarkCheck(true);
        return bookmarkAnswerRepository.save(bookmark);
    }

    private BookmarkAnswer bookmarkUnCheck(BookmarkAnswer bookmark) {
        bookmark.setBookmarkCheck(false);
        return bookmarkAnswerRepository.save(bookmark);
    }


    private BookmarkAnswer getBookmark(BookmarkAnswer bookmark) {
        Answer answer = answerService.findAnswer(bookmark.getAnswer().getAnswerId());
        User user = userService.findUser(bookmark.getUser().getUserId());

        Optional<BookmarkAnswer> optionalBookmarkAnswer = bookmarkAnswerRepository.findByAnswerAndUser(answer, user);
        if (optionalBookmarkAnswer.isPresent()) {
            return optionalBookmarkAnswer.get();
        } else {
            BookmarkAnswer bookmarkAnswer = new BookmarkAnswer();
            bookmarkAnswer.setUser(user);
            bookmarkAnswer.setAnswer(answer);
            return bookmarkAnswer;
        }
    }

    public BookmarkQuestion updateBookmarkQuestion(BookmarkQuestion bookmark) {
        BookmarkQuestion bookmarkQuestion = getBookmark(bookmark);
        //true일 때 요청 -> false
        if (bookmarkQuestion.isBookmarkCheck()) {
            return bookmarkUnCheck(bookmarkQuestion);
            //false or null일 때 요청 -> true
        } else {
            return bookmarkCheck(bookmarkQuestion);
        }
    }

    private BookmarkQuestion bookmarkCheck(BookmarkQuestion bookmark) {
        bookmark.setBookmarkCheck(true);
        return bookmarkQuestionRepository.save(bookmark);
    }

    private BookmarkQuestion bookmarkUnCheck(BookmarkQuestion bookmark) {
        bookmark.setBookmarkCheck(false);
        return bookmarkQuestionRepository.save(bookmark);
    }


    private BookmarkQuestion getBookmark(BookmarkQuestion bookmark) {
        Question question = questionService.findQuestion(bookmark.getQuestion().getQuestionId());
        User user = userService.findUser(bookmark.getUser().getUserId());

        Optional<BookmarkQuestion> optionalBookmarkQuestion = bookmarkQuestionRepository.findByQuestionAndUser(question, user);
        if (optionalBookmarkQuestion.isPresent()) {
            return optionalBookmarkQuestion.get();
        } else {
            BookmarkQuestion bookmarkQuestion = new BookmarkQuestion();
            bookmarkQuestion.setUser(user);
            bookmarkQuestion.setQuestion(question);
            return bookmarkQuestion;
        }
    }
}
