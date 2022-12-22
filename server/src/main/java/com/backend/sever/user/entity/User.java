package com.backend.sever.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.cglib.core.Local;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column
    private String profileImage;

    @Column(nullable = false, unique = true)
    private String displayName;

    @Column(nullable = false, unique = true, updatable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(length = 100)
    private String about;
}
