package com.backend.sever.question.mapper;

import com.backend.sever.answer.entity.Answer;
import com.backend.sever.comments.entity.Comments;
import com.backend.sever.question.dto.*;
import com.backend.sever.question.dto.questionInfodtos.AnswerInfoDto;
import com.backend.sever.question.dto.questionInfodtos.CommentsInfoDto;
import com.backend.sever.question.dto.questionInfodtos.UserSimpleInfoDto;
import com.backend.sever.question.entity.Question;
import com.backend.sever.question.pageDto.PageResponseDto;
import com.backend.sever.question.pageDto.QuestionInfo;
import com.backend.sever.question.pageDto.UserInfo;
import com.backend.sever.questionTag.dto.QuestionTagResponseDto;
import com.backend.sever.questionTag.entity.QuestionTag;
import com.backend.sever.tag.entity.Tag;
import com.backend.sever.user.entity.User;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        User user = new User();
        user.setUserId(questionPostDto.getUserId());

        question.setTitle(questionPostDto.getTitle());
        question.setBody(questionPostDto.getBody());
        question.setBodyString(questionPostDto.getBodyString());

        List<QuestionTag> questionTags = questionPostDto.getTags().stream()
                .map(questionTagId -> {
                    QuestionTag questionTag = new QuestionTag();
                    Tag tag = new Tag();
                    tag.setTagId(questionTagId);
                    questionTag.addQuestion(question);
                    questionTag.addTag(tag);

                    return questionTag;
                }).collect(Collectors.toList());

        question.setQuestionTags(questionTags);
        question.setUser(user);

        return question;
    }

    default Question questionPutDtoToQuestion(QuestionPutDto questionPutDto) {
        Question question = new Question();
        question.setTitle(questionPutDto.getTitle());
        question.setBody(questionPutDto.getBody());
        question.setBodyString(questionPutDto.getBodyString());

        List<QuestionTag> questionTags = questionPutDto.getTags().stream()
                .map(questionTagId -> {
                    QuestionTag questionTag = new QuestionTag();
                    Tag tag = new Tag();
                    tag.setTagId(questionTagId);
                    questionTag.addQuestion(question);
                    questionTag.addTag(tag);

                    return questionTag;
                }).collect(Collectors.toList());

        question.setQuestionTags(questionTags);

        return question;
    }

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        List<QuestionTag> questionTags = question.getQuestionTags();

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setBody(question.getBody());
        questionResponseDto.setBodyString(question.getBodyString());
        questionResponseDto.setTags(questionTagsToQuestionTagResponseDtos(questionTags));

        return questionResponseDto;
    }

    QuestionIdResponseDto questionToQuestionIdDto(Question question);

    default PageResponseDto questionInfosToPageResponseDto(Page<Question> questionPages) {
        PageResponseDto pageResponseDto = new PageResponseDto();

        List<QuestionInfo> questionInfos =
        questionPages.getContent().stream().map(content -> {
            QuestionInfo questionInfo = new QuestionInfo();
            questionInfo.setQuestionId(content.getQuestionId());

            UserInfo userInfo = new UserInfo();
            userInfo.setUserId(content.getUser().getUserId());
            userInfo.setDisplayName(content.getUser().getDisplayName());
            userInfo.setProfileImage(content.getUser().getProfileImage());
            questionInfo.setUser(userInfo);
            questionInfo.setTitle(content.getTitle());
            questionInfo.setBody(content.getBody());
            questionInfo.setBodyString(content.getBodyString());
            questionInfo.setCreatedAt(content.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy/MM/dd/HH:mm")));
            questionInfo.setModifiedAt(content.getModifiedAt().format(DateTimeFormatter.ofPattern("yyyy/MM/dd/HH:mm")));
            questionInfo.setVote(content.getVote());
            questionInfo.setAnswers(content.getAnswerCount());

            List<String> tagNames =
            content.getQuestionTags().stream().map(questionTag -> {
                return questionTag.getTag().getTagName();
            }).collect(Collectors.toList());
            questionInfo.setTags(tagNames);

            return questionInfo;
        }).collect(Collectors.toList());

        pageResponseDto.setQuestionInfos(questionInfos);
        pageResponseDto.setTotalQuestions(questionPages.getTotalElements());
        pageResponseDto.setTotalPages(questionPages.getTotalPages());

        return pageResponseDto;
    }

    default List<QuestionTagResponseDto> questionTagsToQuestionTagResponseDtos(List<QuestionTag> questionTags) {
        return questionTags
                .stream()
                .map(questionTag -> QuestionTagResponseDto
                        .builder()
                        .tagId(questionTag.getTag().getTagId())
                        .tagName(questionTag.getTag().getTagName())
                        .build())
                .collect(Collectors.toList());

    }

    //질문 본문 정보 매핑
    default QuestionInfoResponseDto questionToQuestionInfoDto(Question question){
        QuestionInfoResponseDto.QuestionInfoResponseDtoBuilder questionInfoResponseDtoBuilder = QuestionInfoResponseDto.builder();

        questionInfoResponseDtoBuilder.questionId(question.getQuestionId());
        questionInfoResponseDtoBuilder.title(question.getTitle());
        questionInfoResponseDtoBuilder.body(question.getBody());
        questionInfoResponseDtoBuilder.vote(question.getVote());
        questionInfoResponseDtoBuilder.createdAt(DateTimeFormatter.ofPattern("yyyy/MM/dd/HH:mm").format(question.getCreatedAt()));
        questionInfoResponseDtoBuilder.modifiedAt(DateTimeFormatter.ofPattern("yyyy/MM/dd/HH:mm").format(question.getModifiedAt()));
        questionInfoResponseDtoBuilder.user(userToUserInfoDto(question.getUser()));
        questionInfoResponseDtoBuilder.tags(questionTagsToQuestionTagResponseDtos(question.getQuestionTags()));
        questionInfoResponseDtoBuilder.answers(answersToAnswerInfoDto(question.getAnswers()));

        return questionInfoResponseDtoBuilder.build();
    }

    default List<AnswerInfoDto> answersToAnswerInfoDto(List<Answer> answers){
        return answers.stream().map(answer -> AnswerInfoDto.builder()
                .answerId(answer.getAnswerId())
                .body(answer.getBody())
                .createdAt(DateTimeFormatter.ofPattern("yyyy/MM/dd/HH:mm").format(answer.getCreatedAt()))
                .modifiedAt(DateTimeFormatter.ofPattern("yyyy/MM/dd/HH:mm").format(answer.getModifiedAt()))
                .vote(answer.getVote())
                .user(userToUserInfoDto(answer.getUser()))
                .comments(commentsToCommentsInfoDto(answer.getComments()))
                .build()
        ).collect(Collectors.toList());
    }

    default List<CommentsInfoDto> commentsToCommentsInfoDto(List<Comments> comments){
        return comments.stream().map(comment -> CommentsInfoDto.builder()
                .commentId(comment.getCommentsId())
                .body(comment.getBody())
                .user(userToUserInfoDto(comment.getUser()))
                .createdAt(DateTimeFormatter.ofPattern("yyyy/MM/dd/HH:mm").format(comment.getCreatedAt()))
                .modifiedAt(DateTimeFormatter.ofPattern("yyyy/MM/dd/HH:mm").format(comment.getModifiedAt()))
                .build()
        ).collect(Collectors.toList());
    }

    UserSimpleInfoDto userToUserInfoDto(User user);
}