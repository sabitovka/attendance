package com.sabkar.attendance.graphql.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.sabkar.attendance.entity.transfer.*;
import com.sabkar.attendance.service.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class LessonResolver implements GraphQLResolver<LessonDto> {
    private GroupService groupService;
    private BellService bellService;
    private DayService dayService;
    private DisciplineService disciplineService;
    private LessonService lessonService;
    private LessonWeekService lessonWeekService;
    private TeacherService teacherService;

    public DisciplineDto getDiscipline(LessonDto lesson) {
        return disciplineService.fetchById(lesson.getDisciplineId());
    }

    public TeacherDto getTeacher(LessonDto lesson) {
        return teacherService.fetchById(lesson.getTeacherId());
    }

    public GroupDto getGroup(LessonDto lesson) {
        return groupService.fetchGroupById(lesson.getGroupId());
}

    public DayDto getDay(LessonDto lesson) {
        return dayService.fetchById(lesson.getDayId());
    }

    public LessonWeekDto getLessonWeek(LessonDto lesson) {
        return lessonWeekService.fetchById(lesson.getLessonWeekId());
    }

    public BellDto getBell(LessonDto lesson) {
        return bellService.fetchById(lesson.getBellId());
    }
}
