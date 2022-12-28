package com.backend.sever.question.entity;

import com.backend.sever.answer.entity.Answer;
import com.backend.sever.bookmark.entity.Bookmark;
import com.backend.sever.comments.entity.Comments;
import com.backend.sever.questionTag.entity.QuestionTag;
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
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(length = 50, nullable = false)
    private String title;

    @Column(length = 1500, nullable = false)
    private String body;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @LastModifiedDate
    @Column
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @Column(nullable = false)
    private int view;

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Vote> votes = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<QuestionTag> questionTags = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Comments> comments = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Answer> Answers = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Bookmark> bookmarks = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    public void addQuestionTag(QuestionTag questionTag) {
        this.questionTags.add(questionTag);
        if (questionTag.getQuestion() != this) {
            questionTag.addQuestion(this);
        }
    }
}
