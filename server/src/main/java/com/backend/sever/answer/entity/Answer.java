package com.backend.sever.answer.entity;

import com.backend.sever.bookmark.entity.BookmarkAnswer;
import com.backend.sever.comments.entity.Comments;
import com.backend.sever.question.entity.Question;
import com.backend.sever.user.entity.User;
import com.backend.sever.vote.entity.Vote;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false,length = 5000)
    private String body;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @LastModifiedDate
    @Column
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "answer", cascade = CascadeType.PERSIST)
    private List<Comments> comments = new ArrayList<>();

    @OneToMany(mappedBy = "answer", cascade = CascadeType.PERSIST)
    private List<BookmarkAnswer> bookmarkAnswers = new ArrayList<>();

    @OneToMany(mappedBy = "answer", cascade = CascadeType.PERSIST)
    private List<Vote> votes = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
}
