package com.backend.sever.vote.mapper;

import com.backend.sever.vote.dto.AnswerVotePutDto;
import com.backend.sever.vote.dto.QuestionVotePutDto;
import com.backend.sever.vote.entity.AnswerVote;
import com.backend.sever.vote.entity.QuestionVote;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface VoteMapper {
    @Mapping(source = "questionId",target = "question.questionId")
    @Mapping(source = "userId",target = "user.userId")
    QuestionVote voteQuestionPutDtoToVote (QuestionVotePutDto questionVotePutDto);

    @Mapping(source = "userId",target = "user.userId")
    @Mapping(source = "answerId",target = "answer.answerId")
    AnswerVote voteAnswerPutDtoToVote(AnswerVotePutDto answerVotePutDto);
}
