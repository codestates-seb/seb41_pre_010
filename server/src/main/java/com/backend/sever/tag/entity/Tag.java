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
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @ElementCollection
    @Column(nullable = false, unique = true, updatable = false, length = 50)
    private List<String> tagNames;

    @OneToMany(mappedBy = "tag", cascade = CascadeType.PERSIST)
    private List<QuestionTag> questionTags = new ArrayList<>();

    public void addQuestionTag(QuestionTag questionTag) {
        this.questionTags.add(questionTag);
        if (questionTag.getTag() != this) {
            questionTag.addTag(this);
        }
    }
}
