package com.backend.sever.tag.mapper;

import com.backend.sever.tag.dto.TagPostDto;
import com.backend.sever.tag.dto.TagPostDtos;
import com.backend.sever.tag.dto.TagResponseDto;
import com.backend.sever.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface TagMapper {
    Tag tagPostDtoToTag(TagPostDto tagPostDto);

    default List<Tag> tagPostDtosToTags(TagPostDtos tagPostDtos) {
        List<Tag> tags = tagPostDtos.getTags().stream()
                .map(tagPostDto -> {
                    Tag tag = new Tag();
                    tag.setTagName(tagPostDto.getTagName());

                    return tag;
                }).collect(Collectors.toList());

        return tags;
    }

    TagResponseDto tagToTagResponseDto(Tag tag);

    default List<TagResponseDto> tagToTagResponseDtos(List<Tag> tags) {
        List<TagResponseDto> tagResponseDtos =
        tags.stream()
                .map(tag -> {
                    TagResponseDto tagResponseDto = new TagResponseDto();
                    tagResponseDto.setTagId(tag.getTagId());
                    tagResponseDto.setTagName(tag.getTagName());

                    return tagResponseDto;
                }).collect(Collectors.toList());

        return tagResponseDtos;
    }

}
