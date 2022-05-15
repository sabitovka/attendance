package com.sabkar.attendance.entity.domain;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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

    @OneToMany(mappedBy = "student")
    private List<Mark> marks = new ArrayList<>();

}