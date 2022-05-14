package com.sabkar.attendance.entity.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "discipline")
public class Discipline extends SimpleEntity {
    @OneToMany(mappedBy = "discipline", orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Task> tasks = new ArrayList<>();
}