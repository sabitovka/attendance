package com.sabkar.attendance.graphql.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.sabkar.attendance.common.Utils;
import com.sabkar.attendance.entity.transfer.BellDto;
import com.sabkar.attendance.entity.transfer.DayDto;
import com.sabkar.attendance.entity.transfer.LessonDto;
import com.sabkar.attendance.entity.transfer.LessonWeekDto;
import com.sabkar.attendance.service.DayService;
import com.sabkar.attendance.service.LessonService;
import com.sabkar.attendance.service.LessonWeekService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
@AllArgsConstructor
public class BellResolver implements GraphQLResolver<BellDto> {

    DayService dayService;
    LessonService lessonService;
    LessonWeekService lessonWeekService;

    public List<LessonDto> getLessons(BellDto bell, int groupId, String date) {
        Date parsedDate = Utils.stringToDate(date);
        if (parsedDate == null) {
            throw new IllegalArgumentException("String parameter `date` couldn't be parsed to Date. Expected `yyyy-MM-dd`, given: " + date);
        }
        LessonWeekDto lessonWeek = lessonWeekService.fetchByDate(Utils.convertToLocalDateViaInstant(parsedDate));
        DayDto day = dayService.fetchByDate(Utils.convertToLocalDateViaInstant(parsedDate));
        return lessonService.fetchByBellIdGroupIdAndDayIdAndWeekId(bell.getId(), groupId, day.getId(), lessonWeek.getId());
    }

}
