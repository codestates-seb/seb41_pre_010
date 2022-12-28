package com.backend.sever.bookmark.service;

import com.backend.sever.bookmark.dto.BookmarkQuestionPutDto;
import com.backend.sever.bookmark.entity.BookmarkQuestion;
import com.backend.sever.bookmark.mapper.BookmarkMapper;
import com.backend.sever.bookmark.repository.BookmarkAnswerRepository;
import com.backend.sever.bookmark.repository.BookmarkQuestionRepository;
import org.springframework.stereotype.Service;

@Service
public class BookmarkService {
    private final BookmarkAnswerRepository bookmarkAnswerRepository;
    private final BookmarkQuestionRepository questionRepository;
    private final BookmarkMapper bookmarkMapper;

    public BookmarkService(BookmarkAnswerRepository bookmarkAnswerRepository, BookmarkQuestionRepository questionRepository, BookmarkMapper bookmarkMapper) {
        this.bookmarkAnswerRepository = bookmarkAnswerRepository;
        this.questionRepository = questionRepository;
        this.bookmarkMapper = bookmarkMapper;
    }

}
