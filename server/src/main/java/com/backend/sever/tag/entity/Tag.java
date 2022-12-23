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

    @Column(nullable = false, unique = true, updatable = false, length = 50)
    private String tagName;

    @OneToMany(mappedBy = "tag", cascade = CascadeType.PERSIST)
    private List<QuestionTag> questionTag = new ArrayList<>();

    // <QuestionResponse Stub용 코드> 시작
    public Tag(long tagId, String tagName) {
        this.tagId = tagId;
        this.tagName = tagName;
    }
    // 끝
}
