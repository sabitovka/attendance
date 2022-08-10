package com.sabkar.attendance.graphql.resolver;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.sabkar.attendance.entity.transfer.*;
import com.sabkar.attendance.service.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;

@Component
@AllArgsConstructor
public class Query implements GraphQLQueryResolver {

    private StudentService studentService;
    private GroupService groupService;
    private BellService bellService;
    private DayService dayService;
    private DisciplineService disciplineService;
    private LessonService lessonService;
    private LessonWeekService lessonWeekService;
    private TeacherService teacherService;

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

    public List<BellDto> getBells() {
        return bellService.fetchAll();
    }

    public List<DayDto> getDays() {
        return dayService.fetchAll();
    }

    public List<DisciplineDto> getDisciplines() {
        return disciplineService.fetchAll();
    }

    public List<LessonDto> getLessons() {
        return lessonService.fetchAll();
    }

    public List<LessonWeekDto> getLessonWeeks() {
        return lessonWeekService.fetchAll();
    }

    public List<TeacherDto> getTeachers() {
        return teacherService.fetchAll();
    }

    public List<MarkDto> getMarks(String markDate) {
        System.out.println(markDate);
        return Collections.emptyList();
    }

}
