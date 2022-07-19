package com.sabkar.attendance.entity.transfer;

import lombok.*;

import java.io.Serializable;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class MarkDto implements Serializable {
    private Integer id;
    private Date markDate;
    private boolean absent;
    private Integer studentId;
}
