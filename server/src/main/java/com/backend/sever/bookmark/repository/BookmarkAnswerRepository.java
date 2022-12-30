package com.backend.sever.bookmark.repository;

import com.backend.sever.answer.entity.Answer;
import com.backend.sever.bookmark.entity.BookmarkAnswer;
import com.backend.sever.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookmarkAnswerRepository extends JpaRepository<BookmarkAnswer,Long> {
    Optional<BookmarkAnswer> findByAnswerAndUser(Answer answer, User user);
}
