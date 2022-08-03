package com.sabkar.attendance.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.sabkar.attendance.entity.transfer.GroupDto;
import com.sabkar.attendance.entity.transfer.StudentDto;
import com.sabkar.attendance.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class GroupResolver implements GraphQLResolver<GroupDto> {

    private StudentService studentService;

    public List<StudentDto> getStudents(GroupDto group) {
        return studentService.fetchByGroupId(group.getId());
    }

}
