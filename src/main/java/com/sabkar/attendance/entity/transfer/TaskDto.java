package com.sabkar.attendance.entity.transfer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TaskDto implements Serializable {
    private Integer id;
    private WeekDayDto weekDay;
    private BellDto bell;
    private DisciplineDto discipline;
    private TeacherDto teacher;
}
