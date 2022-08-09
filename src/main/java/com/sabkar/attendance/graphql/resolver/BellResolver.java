package com.sabkar.attendance.graphql.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.sabkar.attendance.entity.transfer.BellDto;
import com.sabkar.attendance.entity.transfer.LessonDto;
import com.sabkar.attendance.service.LessonService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class BellResolver implements GraphQLResolver<BellDto> {

    LessonService lessonService;

    public List<LessonDto> getLessons(BellDto bell, Integer groupId, Integer dayId, Integer weekId) {
        return lessonService.fetchByBellIdGroupIdAndDayIdAndWeekId(bell.getId(), groupId, dayId, weekId);
    }

}
