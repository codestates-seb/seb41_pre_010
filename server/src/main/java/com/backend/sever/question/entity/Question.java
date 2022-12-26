package com.backend.sever.question.entity;

import com.backend.sever.answer.entity.Answer;
import com.backend.sever.bookmark.entity.BookmarkQuestion;
import com.backend.sever.comments.entity.Comments;
import com.backend.sever.questionTag.entity.QuestionTag;
import com.backend.sever.user.entity.User;
import com.backend.sever.vote.entity.QuestionVote;
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

    @Column
    private int answerCount;

    @Column
    private int vote;

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<QuestionVote> questionVotes = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<QuestionTag> questionTags = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Comments> comments = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Answer> Answers = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<BookmarkQuestion> bookmarksQuestions = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    public void countUp(){
        this.vote++;
    }
    public void countDown(){
        this.vote--;
    }
}
