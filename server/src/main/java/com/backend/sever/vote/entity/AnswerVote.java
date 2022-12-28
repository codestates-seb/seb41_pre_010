package com.backend.sever.vote.entity;

import com.backend.sever.answer.entity.Answer;
import com.backend.sever.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class AnswerVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerVoteId;

    @Column
    private int voteCount;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

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
