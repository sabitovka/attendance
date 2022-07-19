package com.sabkar.attendance.services;

import com.sabkar.attendance.entity.domain.Mark;
import com.sabkar.attendance.entity.domain.Student;
import com.sabkar.attendance.entity.transfer.MarkDto;
import com.sabkar.attendance.entity.transfer.StudentWithMarksDto;
import com.sabkar.attendance.repository.MarkRepository;
import com.sabkar.attendance.repository.StudentRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentService {

    private StudentRepository studentRepository;
    private MarkRepository markRepository;

    public List<StudentWithMarksDto> findStudentsByGroupId(Integer groupId) {
        return studentRepository.findStudentsByGroupId(groupId).stream()
            .map(this::convertToDto)
            .collect(Collectors.toList());
    }

    public List<StudentWithMarksDto> findStudentsMarks(LocalDate date, Integer groupId) {
        LocalDate startDate = date.withDayOfMonth(1);
        LocalDate endDate = date.withDayOfMonth(date.lengthOfMonth());

        ModelMapper modelMapper = new ModelMapper();
        TypeMap<Student, StudentWithMarksDto> propertyMapper = modelMapper.createTypeMap(Student.class, StudentWithMarksDto.class);
        propertyMapper.addMappings(mapper -> mapper.skip(StudentWithMarksDto::setMarks));

        List<Mark> marks = markRepository.findByMarkDateBetweenAndStudentGroupId(startDate, endDate, groupId);

        return studentRepository.findStudentsByGroupId(groupId).stream()
            .map(student -> modelMapper.map(student, StudentWithMarksDto.class))
            .map(student -> student.setMarks(marks.stream()
                .filter(mark -> mark.getStudent().getId().equals(student.getId()))
                .map(this::convertToDto)
                .collect(Collectors.toList())
            ))
            .collect(Collectors.toList());
    }

    private StudentWithMarksDto convertToDto(Student student) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(student, StudentWithMarksDto.class);
    }

    private MarkDto convertToDto(Mark mark) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(mark, MarkDto.class);
    }

}
