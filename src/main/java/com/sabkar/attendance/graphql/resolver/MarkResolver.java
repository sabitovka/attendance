package com.sabkar.attendance.graphql.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.sabkar.attendance.entity.transfer.MarkDto;
import com.sabkar.attendance.entity.transfer.StudentDto;
import com.sabkar.attendance.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class MarkResolver implements GraphQLResolver<MarkDto> {

    private StudentService studentService;

    public StudentDto getStudent(MarkDto markDto) {
        return studentService.fetchById(markDto.getStudentId());
    }

}
