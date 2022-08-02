package com.sabkar.attendance.entity.transfer;

import lombok.Data;

@Data
public class StudentDto {
    private Integer id;
    private String fullname;
    private String email;
    private String phone;
    private String address;
    private int groupId;
}
