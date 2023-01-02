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
    @Query(value = "SELECT COUNT(tagid) FROM tag", nativeQuery =true)
    long countTag();

    @Query(value = "SELECT question_tag_id FROM question_tag WHERE question_id = :questionId", nativeQuery =true)
    Optional<List<Long>> findQuestionTagIdByQuestionId(Long questionId);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM question_tag WHERE question_tag_id = :questionTagId", nativeQuery =true)
    void deleteQuestionTagIdById(Long questionTagId);

    @Query(value = "SELECT * FROM question WHERE questionid IN :questionId", nativeQuery =true)
    Page<Question> makePageByQuestionId(Set<Long> questionId, Pageable pageable);

    @Query(value = "SELECT questionid FROM question WHERE body LIKE %:keyword% OR question_title LIKE %:keyword%", nativeQuery =true)
    Set<Long> findQuestionIdByKeywordInQuestionTable(String keyword);

    @Query(value = "SELECT question_id FROM question_Tag WHERE tag_id IN (SELECT tagid FROM tag WHERE tag_name LIKE %:keyword%)", nativeQuery =true)
    Set<Long> findQuestionIdByKeywordInTagTable(String keyword);

    @Query(value = "SELECT questionid FROM question WHERE user_id IN (SELECT userid FROM users WHERE display_name LIKE %:keyword%)", nativeQuery =true)
    Set<Long> findQuestionIdByKeywordInUserTable(String keyword);

}