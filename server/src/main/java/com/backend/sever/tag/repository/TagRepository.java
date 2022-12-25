package com.backend.sever.tag.repository;

import com.backend.sever.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
