package com.backend.sever.bookmark.mapper;

import com.backend.sever.bookmark.dto.BookmarkAnswerPutDto;
import com.backend.sever.bookmark.dto.BookmarkQuestionPutDto;
import com.backend.sever.bookmark.entity.BookmarkAnswer;
import com.backend.sever.bookmark.entity.BookmarkQuestion;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface BookmarkMapper {
    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "questionId",target = "question.questionId")
    BookmarkQuestion bookmarkQuestionPutDtoBookmarkQuestion(BookmarkQuestionPutDto bookmarkQuestionPutDto);

    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "answerId", target = "answer.answerId")
    BookmarkAnswer bookmarkAnswerPutDtoBookmarkAnswer(BookmarkAnswerPutDto bookmarkAnswerPutDto);
}
