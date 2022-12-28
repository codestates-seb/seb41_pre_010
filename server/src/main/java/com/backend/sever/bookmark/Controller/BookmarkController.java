package com.backend.sever.bookmark.Controller;

import com.backend.sever.bookmark.dto.BookmarkQuestionPutDto;
import com.backend.sever.bookmark.mapper.BookmarkMapper;
import com.backend.sever.bookmark.service.BookmarkService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/bookmark")
public class BookmarkController {
    private final BookmarkMapper bookmarkMapper;
    private final BookmarkService bookmarkService;

    public BookmarkController(BookmarkMapper bookmarkMapper, BookmarkService bookmarkService) {
        this.bookmarkMapper = bookmarkMapper;
        this.bookmarkService = bookmarkService;
    }

    @PutMapping("/{question-id}/questions")
    public ResponseEntity putBookmarkQuestion(@PathVariable("question-id") long questionId,
                                              @RequestBody BookmarkQuestionPutDto bookmarkQuestionPutDto) {
        bookmarkQuestionPutDto.setQuestionId(questionId);
        bookmarkService.updateBookmarkQuestion(bookmarkMapper.bookmarkQuestionPutDtoBookmarkQuestion(bookmarkQuestionPutDto));

        return new ResponseEntity(HttpStatus.OK);
    }
}
