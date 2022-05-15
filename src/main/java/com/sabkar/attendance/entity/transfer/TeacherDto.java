package com.sabkar.attendance.entity.transfer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class TeacherDto implements Serializable {
    private Long id;
    private String firstName;
    private String lastName;
    private String middleName;
}
