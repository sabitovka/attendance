package com.sabkar.attendance.service;

import com.sabkar.attendance.entity.domain.Mark;
import com.sabkar.attendance.entity.transfer.MarkDto;
import com.sabkar.attendance.repository.MarkRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.persistence.EntityExistsException;

@Service
@AllArgsConstructor
public class MarkService {

    private MarkRepository markRepository;
    private ModelMapper modelMapper;

    public MarkDto saveMark(MarkDto markDto) {
        boolean exists = markRepository.existsByMarkDateAndStudentIdAndLessonId(
            markDto.getMarkDate(), markDto.getStudentId(), markDto.getLessonId());
        if (exists) {
            throw new EntityExistsException(String.format("Mark (%s) already exists", markDto));
        }
        Mark mark = modelMapper.map(markDto, Mark.class);
        Mark saved = markRepository.save(mark);
        return modelMapper.map(saved, MarkDto.class);
    }

}
