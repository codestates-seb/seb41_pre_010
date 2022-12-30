package com.backend.sever.question.repository;

import com.backend.sever.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Query(value = "SELECT COUNT(TAGID) FROM TAG", nativeQuery =true)
    long countTag();

    @Query(value = "SELECT QUESTION_TAG_ID FROM QUESTION_TAG WHERE QUESTION_ID = :questionId", nativeQuery =true)
    Optional<List<Long>> findQuestionTagIdByQuestionId(Long questionId);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM QUESTION_TAG WHERE QUESTION_TAG_ID = :questionTagId", nativeQuery =true)
    void deleteQuestionTagIdById(Long questionTagId);

    @Query(value = "SELECT * FROM QUESTION WHERE QUESTIONID IN :questionId", nativeQuery =true)
    Page<Question> makePageByQuestionId(Set<Long> questionId, Pageable pageable);

    @Query(value = "SELECT QUESTIONID FROM QUESTION WHERE BODY LIKE %:keyword% OR QUESTION_TITLE LIKE %:keyword%", nativeQuery =true)
    Set<Long> findQuestionIdByKeywordInQuestionTable(String keyword);

    @Query(value = "SELECT QUESTION_ID FROM QUESTION_TAG WHERE TAG_ID IN (SELECT TAGID FROM TAG WHERE TAG_NAME LIKE %:keyword%)", nativeQuery =true)
    Set<Long> findQuestionIdByKeywordInTagTable(String keyword);

    @Query(value = "SELECT QUESTIONID FROM QUESTION WHERE USER_ID IN (SELECT USERID FROM USERS WHERE DISPLAY_NAME LIKE %:keyword%)", nativeQuery =true)
    Set<Long> findQuestionIdByKeywordInUserTable(String keyword);

}