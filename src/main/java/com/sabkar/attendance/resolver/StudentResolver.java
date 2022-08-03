package com.sabkar.attendance.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.sabkar.attendance.entity.transfer.GroupDto;
import com.sabkar.attendance.entity.transfer.StudentDto;
import com.sabkar.attendance.service.GroupService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class StudentResolver implements GraphQLResolver<StudentDto> {

    GroupService groupService;

    public GroupDto getGroup(StudentDto student) {
        return groupService.fetchGroupById(student.getGroupId());
    }

}
