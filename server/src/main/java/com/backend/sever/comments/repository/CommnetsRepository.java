package com.backend.sever.comments.repository;

import com.backend.sever.comments.entity.Comments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommnetsRepository extends JpaRepository<Comments , Long> {
}
