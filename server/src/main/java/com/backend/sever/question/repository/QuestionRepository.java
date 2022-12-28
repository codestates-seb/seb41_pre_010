package com.backend.sever.question.repository;

import com.backend.sever.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Query(value = "SELECT QUESTION_TAG_ID FROM QUESTION_TAG WHERE QUESTION_ID = :questionId", nativeQuery =true)
    List<Long> findQuestionTagIdByQuestionId(Long questionId);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM QUESTION_TAG WHERE QUESTION_TAG_ID = :questionTagId", nativeQuery =true)
    void deleteQuestionTagIdById(Long questionTagId);
}