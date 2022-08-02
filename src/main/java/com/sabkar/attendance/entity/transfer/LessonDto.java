package com.sabkar.attendance.entity.transfer;

import lombok.Data;

@Data
public class LessonDto {
    private Integer id;
    private Integer disciplineId;
    private Integer teacherId;
    private Integer groupId;
    private Integer roomNumber;
    private Integer dayId;
    private Integer lessonWeekId;
    private Integer bellI;
}
