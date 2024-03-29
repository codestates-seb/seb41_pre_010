package com.backend.sever.tag.entity;

import com.backend.sever.questionTag.entity.QuestionTag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
//@Table(name = "TESTTAG")
public class Tag {
    @Id
    @Column(name = "TAGID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Column(nullable = false, unique = true, updatable = false, length = 50)
    private String tagName;

    @OneToMany(mappedBy = "tag", cascade = CascadeType.PERSIST)
    private List<QuestionTag> questionTags = new ArrayList<>();

    public void addQuestionTag(QuestionTag questionTag) {
        this.questionTags.add(questionTag);
        if (questionTag.getTag() != this) {
            questionTag.addTag(this);
        }
    }
}
