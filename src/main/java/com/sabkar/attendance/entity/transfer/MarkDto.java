package com.sabkar.attendance.entity.transfer;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.validation.constraints.NotNull;
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
    @NotNull(message = "The date of the mark can't be null")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date markDate;
    private boolean isAbsent;
    @NotNull(message = "Student id not provided")
    private Integer studentId;
    @NotNull(message = "Lesson id not provided")
    private Integer lessonId;
    private Integer reasonId;
}
