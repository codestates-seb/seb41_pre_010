package com.backend.sever.tag.service;

import com.backend.sever.tag.entity.Tag;
import com.backend.sever.tag.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TagService {
    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Tag createTag(Tag tag) {
        verifyExistTag(tag);

        return tagRepository.save(tag);
    }

    private void verifyExistTag(Tag tag) {
        Optional<Tag> optionalTag = tagRepository.findById(tag.getTagId());
        if(optionalTag.isPresent()) {
            // 이미 등록된 Tag를 등록하려 한다면 RuntimeError 발생
            try {
                throw new RuntimeException("이미 존재하는 Tag 입니다.");
            } catch (RuntimeException e) {
                System.out.println(e.getMessage());
            }
        }
    }

}
