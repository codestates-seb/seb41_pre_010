package com.backend.sever.tag.service;

import com.backend.sever.tag.entity.Tag;
import com.backend.sever.tag.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TagService {
    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public List<Tag> createTag(List<Tag> tags) {

        return tags.stream()
                .map(tag -> {
                    Optional<Tag> optionalTag = tagRepository.findByTagName(tag.getTagName());

                    if(optionalTag.isPresent()) {
                        return optionalTag.get();
                    } else {
                        return tagRepository.save(tag);
                    }

                }).collect(Collectors.toList());
    }

}
