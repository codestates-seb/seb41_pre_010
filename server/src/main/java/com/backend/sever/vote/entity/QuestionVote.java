package com.backend.sever.vote.entity;

import com.backend.sever.question.entity.Question;
import com.backend.sever.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class QuestionVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionVoteId;

    @Column(nullable = false)
    private int voteCount;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

   @Column
   private boolean voteUpCheck;

   @Column
   private boolean voteDownCheck;

    public void voteUp(){
        this.voteCount++;
    }
    public void voteDown(){
        this.voteCount--;
    }
}
