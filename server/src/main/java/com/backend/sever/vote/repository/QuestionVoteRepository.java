package com.backend.sever.vote.repository;

import com.backend.sever.question.entity.Question;
import com.backend.sever.user.entity.User;
import com.backend.sever.vote.entity.QuestionVote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionVoteRepository extends JpaRepository<QuestionVote,Long> {
    Optional<QuestionVote> findByQuestionAndUser(Question question, User user);
}
