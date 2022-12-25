package com.backend.sever.tag.mapper;

import com.backend.sever.tag.dto.TagPostDto;
import com.backend.sever.tag.dto.TagResponseDto;
import com.backend.sever.tag.entity.Tag;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TagMapper {
    Tag tagPostDtoToTag(TagPostDto tagPostDto);
    TagResponseDto tagToTagResponseDto(Tag tag);
}
