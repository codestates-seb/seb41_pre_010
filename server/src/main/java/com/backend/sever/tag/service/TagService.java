package com.backend.sever.tag.service;

import com.backend.sever.tag.entity.Tag;
import com.backend.sever.tag.repository.TagRepository;
import org.springframework.stereotype.Service;

@Service
public class TagService {
    private TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Tag createService(Tag tag) {

        return tagRepository.save(tag);
    }
}
