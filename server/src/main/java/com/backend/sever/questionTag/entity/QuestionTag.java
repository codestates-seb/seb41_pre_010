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
    private Question question;

    @ManyToOne
    private Tag tag;
}
