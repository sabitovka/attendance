package com.sabkar.attendance.service;

import com.sabkar.attendance.entity.domain.Student;
import com.sabkar.attendance.entity.transfer.StudentDto;
import com.sabkar.attendance.repository.StudentRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentService {

    private StudentRepository studentRepository;
    private ModelMapper modelMapper;

    public List<StudentDto> findStudentsByGroupId(Integer groupId) {
        return studentRepository.findStudentsByGroupId(groupId).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private StudentDto convertToDto(Student student) {
        return modelMapper.map(student, StudentDto.class);
    }

}
