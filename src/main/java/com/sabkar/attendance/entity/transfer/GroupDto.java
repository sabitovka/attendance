package com.sabkar.attendance.entity.transfer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@Getter
@NoArgsConstructor
@Setter
public class GroupDto implements Serializable {
    private Integer id;
    private String ability;
}
