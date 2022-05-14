package com.sabkar.attendance.entity.domain;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "students")
@Getter
@Setter
@RequiredArgsConstructor
public class Student extends Person {
    private Date transferDate;
    private Date deductionDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
    private Group group;
}