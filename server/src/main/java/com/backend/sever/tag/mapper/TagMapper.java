package com.backend.sever.tag.mapper;

import com.backend.sever.tag.dto.TagPostDto;
import com.backend.sever.tag.dto.TagResponseDto;
import com.backend.sever.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface TagMapper {
    default List<Tag> tagPostDtoToTags(TagPostDto tagPostDto) {
        List<Tag> tags = tagPostDto.getTags().stream().map(tagName -> {
            Tag tag = new Tag();
            tag.setTagName(tagName);
            return tag;
        }).collect(Collectors.toList());
        return tags;
    }

//    default List<Tag> tagPostDtosToTags(TagPostDtos tagPostDtos) {
//        List<Tag> tags = tagPostDtos.getTags().stream()
//                .map(tagPostDto -> {
//                    Tag tag = new Tag();
//                    tag.setTagName(tagPostDto.getTagName());
//
//                    return tag;
//                }).collect(Collectors.toList());
//
//        return tags;
//    }

    default TagResponseDto tagsToTagResponseDto(List<Tag> tags) {
        TagResponseDto tagResponseDto = new TagResponseDto();
        List<Long> tagIdList = tags.stream().map(tag -> {
            return tag.getTagId();
        }).collect(Collectors.toList());

        tagResponseDto.setTags(tagIdList);

        return tagResponseDto;
    }

//    default TagResponseDtos tagToTagResponseDtos(List<Tag> tags) {
//        TagResponseDtos tagResponseDtos = new TagResponseDtos();
//        List<TagResponseDto> tagResponseDtoList =
//        tags.stream()
//                .map(tag -> {
//                    TagResponseDto tagResponseDto = new TagResponseDto();
//                    tagResponseDto.setTagId(tag.getTagId());
//                    tagResponseDto.setTagName(tag.getTagName());
//
//                    return tagResponseDto;
//                }).collect(Collectors.toList());
//
//        tagResponseDtos.setTags(tagResponseDtoList);
//
//        return tagResponseDtos;
//    }

}
