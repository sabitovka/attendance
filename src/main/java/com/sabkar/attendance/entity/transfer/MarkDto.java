package com.sabkar.attendance.entity.transfer;

import lombok.*;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.PastOrPresent;
import java.io.Serializable;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class MarkDto implements Serializable {
    private Integer id;
    @PastOrPresent(message = "The date of the mark can't be greater than the current date")
    private Date markDate;
    private boolean isAbsent;
    @NotEmpty(message = "Student id not provided")
    private Integer studentId;
    @NotEmpty(message = "Lesson id not provided")
    private Integer lessonId;
    private Integer reasonId;
}
