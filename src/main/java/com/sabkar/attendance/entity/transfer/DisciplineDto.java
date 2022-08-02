package com.sabkar.attendance.entity.transfer;

import lombok.Data;

@Data
public class DisciplineDto {
    private Integer id;
    private String fullName;
    private String shortName;
    private String abbrevation;
}
