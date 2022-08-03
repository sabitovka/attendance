package com.sabkar.attendance.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.sabkar.attendance.entity.transfer.GroupDto;
import com.sabkar.attendance.entity.transfer.MarkDto;
import com.sabkar.attendance.entity.transfer.StudentDto;
import com.sabkar.attendance.service.GroupService;
import com.sabkar.attendance.service.MarkService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class StudentResolver implements GraphQLResolver<StudentDto> {

    GroupService groupService;
    MarkService markService;

    public GroupDto getGroup(StudentDto student) {
        return groupService.fetchGroupById(student.getGroupId());
    }

    public List<MarkDto> getMarks(StudentDto studentDto) {
        return markService.findByStudentId(studentDto.getId());
    }

}
