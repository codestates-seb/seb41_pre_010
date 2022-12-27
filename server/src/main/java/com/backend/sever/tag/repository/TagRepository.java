package com.backend.sever.tag.repository;

import com.backend.sever.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {
    @Query(value = "SELECT * FROM TAG WHERE TAG_NAME = :tagName", nativeQuery =true)
    Optional<Tag> findByTagName(String tagName);
}
