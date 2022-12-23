package com.backend.sever.user.repository;

import com.backend.sever.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
