package com.sabkar.attendance.entity.domain;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "teachers")
public class Teacher extends Person {
    @OneToMany(mappedBy = "teacher", orphanRemoval = true)
    private List<Task> tasks = new ArrayList<>();
}