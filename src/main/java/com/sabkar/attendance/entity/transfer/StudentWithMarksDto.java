package com.sabkar.attendance.entity.transfer;

import lombok.*;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Accessors(chain = true)
public class StudentWithMarksDto implements Serializable {
    private Long id;
    private String firstName;
    private String lastName;
    private String middleName;
    private Date transferDate;
    private Date deductionDate;
    private GroupDto group;
    private List<MarkDto> marks;
}
