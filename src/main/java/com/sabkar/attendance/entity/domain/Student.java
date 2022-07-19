package com.sabkar.attendance.entity.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "students")
@Getter
@Setter
@RequiredArgsConstructor
public class Student extends Person {
    @Temporal(TemporalType.DATE)
    private Date transferDate;
    @Temporal(TemporalType.DATE)
    private Date deductionDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
    private Group group;

}