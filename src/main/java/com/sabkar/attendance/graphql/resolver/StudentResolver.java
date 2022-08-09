package com.sabkar.attendance.graphql.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.sabkar.attendance.common.Utils;
import com.sabkar.attendance.entity.transfer.GroupDto;
import com.sabkar.attendance.entity.transfer.MarkDto;
import com.sabkar.attendance.entity.transfer.StudentDto;
import com.sabkar.attendance.service.GroupService;
import com.sabkar.attendance.service.MarkService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
@AllArgsConstructor
public class StudentResolver implements GraphQLResolver<StudentDto> {

    GroupService groupService;
    MarkService markService;

    public GroupDto getGroup(StudentDto student) {
        return groupService.fetchGroupById(student.getGroupId());
    }

    public List<MarkDto> getMarks(StudentDto studentDto, String markDate) {

        if (markDate.isBlank()) {
            return markService.findByStudentId(studentDto.getId());
        }
        Date date = Utils.stringToDate(markDate);
        if (date == null) {
            throw new IllegalArgumentException("Unable to parse 'markDate' parameter with value + " + markDate);
        }
        return markService.findByStudentIdAndMarkDate(studentDto.getId(), date);
    }

}
