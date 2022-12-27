package com.backend.sever.vote.repository;

import com.backend.sever.answer.entity.Answer;
import com.backend.sever.user.entity.User;
import com.backend.sever.vote.entity.AnswerVote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnswerVoteRepository extends JpaRepository<AnswerVote, Long> {
    Optional<AnswerVote> findByAnswerAndUser(Answer answer, User user);
}
