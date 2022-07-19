package com.sabkar.attendance.entity.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "teachers")
public class Teacher {
    @Id
    private Integer id;

    @Temporal(TemporalType.DATE)
    private Date dateEmployment;

    @Temporal(TemporalType.DATE)
    private Date dateDismissal;

    @OneToMany(mappedBy = "teacher", orphanRemoval = true)
    private List<Task> tasks = new ArrayList<>();
}