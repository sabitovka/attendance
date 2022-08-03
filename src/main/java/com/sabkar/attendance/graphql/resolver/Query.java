package com.sabkar.attendance.graphql.resolver;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.sabkar.attendance.entity.transfer.GroupDto;
import com.sabkar.attendance.entity.transfer.StudentDto;
import com.sabkar.attendance.service.GroupService;
import com.sabkar.attendance.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class Query implements GraphQLQueryResolver {

    private StudentService studentService;
    private GroupService groupService;

    public String getGreeting() {
        return "Hello from GraphQL";
    }

    public List<StudentDto> getStudents() {
        return studentService.fetchAll();
    }

    public List<GroupDto> getGroups() {
        return groupService.fetchAll();
    }

    public GroupDto getGroup(Integer id) {
        return groupService.fetchGroupById(id);
    }

}
