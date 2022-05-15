package com.sabkar.attendance.entity.transfer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class StudentDto implements Serializable {
    private Long id;
    private String firstName;
    private String lastName;
    private String middleName;
    private Date transferDate;
    private Date deductionDate;
    private GroupDto group;
    private List<MarkDto> marks;
}
