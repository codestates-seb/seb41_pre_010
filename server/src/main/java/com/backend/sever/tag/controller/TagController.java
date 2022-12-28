package com.backend.sever.tag.controller;

import com.backend.sever.tag.dto.TagPostDto;
import com.backend.sever.tag.entity.Tag;
import com.backend.sever.tag.mapper.TagMapper;
import com.backend.sever.tag.service.TagService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/tags")
public class TagController {
    private final TagMapper mapper;
    private final TagService tagService;

    public TagController(TagMapper mapper, TagService tagService) {
        this.mapper = mapper;
        this.tagService = tagService;
    }

    @PostMapping
    public ResponseEntity postTag(@RequestBody TagPostDto tagPostDto) {
        List<Tag> tags = tagService.createTag(mapper.tagPostDtoToTags(tagPostDto));

        return new ResponseEntity<> (mapper.tagsToTagResponseDto(tags), HttpStatus.OK);
    }
}
