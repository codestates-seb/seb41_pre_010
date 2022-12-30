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
    @Column(name = "QUESTIONID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(name = "QUESTION_TITLE", length = 50, nullable = false)
    private String title;

    @Column(length = 1500, nullable = false)
    private String body;

    @Column(length = 500, nullable = false)
    private String bodyString;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @LastModifiedDate
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @Column(nullable = false)
    private int view;

    @Column
    private int answerCount;

    @Column
    private int vote;

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<QuestionVote> questionVotes = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<QuestionTag> questionTags = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Comments> comments = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<Answer> answers = new ArrayList<>();

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

    public void addQuestionTag(QuestionTag questionTag) {
        this.questionTags.add(questionTag);
        if (questionTag.getQuestion() != this) {
            questionTag.addQuestion(this);
        }
    }
}
