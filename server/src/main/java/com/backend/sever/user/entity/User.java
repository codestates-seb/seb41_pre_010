package com.backend.sever.user.entity;

import com.backend.sever.answer.entity.Answer;
import com.backend.sever.bookmark.entity.Bookmark;
import com.backend.sever.comments.entity.Comments;
import com.backend.sever.question.entity.Question;
import com.backend.sever.vote.entity.Vote;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "USERS")
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
    private String title;

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    private List<Comments> comments = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    private List<Bookmark> bookmarks = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    private List<Vote> votes = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    private List<Question> questions = new ArrayList<>();

    //스텁으로 인한 생성

    public User(String profileImage, String displayName, String email, String title) {
        this.profileImage = profileImage;
        this.displayName = displayName;
        this.email = email;
        this.title = title;
    }
}
