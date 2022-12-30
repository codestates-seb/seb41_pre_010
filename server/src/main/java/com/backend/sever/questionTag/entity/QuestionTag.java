package com.backend.sever.questionTag.entity;

import com.backend.sever.question.entity.Question;
import com.backend.sever.tag.entity.Tag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class QuestionTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionTagId;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private Tag tag;

    public void addQuestion(Question question) {
        this.question = question;
        if (!this.question.getQuestionTags().contains(this)) {
            this.question.getQuestionTags().add(this);
        }
    }

    public void addTag(Tag tag) {
        this.tag = tag;
        if (!this.tag.getQuestionTags().contains(this)) {
            this.tag.getQuestionTags().add(this);
        }
    }
}

