package com.sabkar.attendance.entity.transfer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BellDto implements Serializable {
    private Integer id;
    private Date startTime;
    private Date endTime;
}
