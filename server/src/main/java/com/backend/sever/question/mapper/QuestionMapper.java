package com.backend.sever.question.mapper;

import com.backend.sever.question.dto.*;
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
        questionResponseDto.setTags(questionTagsToQuestionTagResponseDtos(questionTags));

        return questionResponseDto;
    }

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
}