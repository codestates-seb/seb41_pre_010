package com.backend.sever.bookmark.repository;

import com.backend.sever.bookmark.entity.BookmarkQuestion;
import com.backend.sever.question.entity.Question;
import com.backend.sever.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookmarkQuestionRepository extends JpaRepository<BookmarkQuestion,Long> {
    Optional<BookmarkQuestion> findByQuestionAndUser(Question question, User user);
}
