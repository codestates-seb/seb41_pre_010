package com.backend.sever.bookmark.service;

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

    public BookmarkService(BookmarkAnswerRepository bookmarkAnswerRepository, BookmarkQuestionRepository bookmarkQuestionRepository, UserService userService, QuestionService questionService) {
        this.bookmarkAnswerRepository = bookmarkAnswerRepository;
        this.bookmarkQuestionRepository = bookmarkQuestionRepository;
        this.userService = userService;
        this.questionService = questionService;
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
        //BookmarkQuestion bookmarkQuestion = getBookmark(bookmark);
        bookmark.setBookmarkCheck(true);
        return bookmarkQuestionRepository.save(bookmark);
    }

    private BookmarkQuestion bookmarkUnCheck(BookmarkQuestion bookmark) {
//        BookmarkQuestion bookmarkQuestion = getBookmark(bookmark);
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
