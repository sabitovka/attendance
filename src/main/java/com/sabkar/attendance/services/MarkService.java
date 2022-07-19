package com.sabkar.attendance.services;

import com.sabkar.attendance.entity.domain.Mark;
import com.sabkar.attendance.entity.domain.Student;
import com.sabkar.attendance.entity.transfer.MarkDto;
import com.sabkar.attendance.repository.MarkRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MarkService {

    private MarkRepository markRepository;

    public MarkDto saveMark(MarkDto markDto) {
        ModelMapper mapper = new ModelMapper();
        TypeMap<MarkDto, Mark> markDtoMarkTypeMap = mapper.createTypeMap(MarkDto.class, Mark.class);
        markDtoMarkTypeMap.addMapping(MarkDto::getStudentId, (mark, o) -> {
            Student student = new Student();
            System.out.println(o);
            student.setId((long) o);
            mark.setStudent(student);
        });
        Mark mark = mapper.map(markDto, Mark.class);
        Mark saved = markRepository.save(mark);
        return mapper.map(saved, MarkDto.class);
    }

}
