package com.sabkar.attendance.entity.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "groups_")
@Getter
@Setter
public class Group extends SimpleEntity {
    @OneToMany(orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
    private List<Student> students = new ArrayList<>();

    @OneToMany(mappedBy = "group", orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Task> tasks = new ArrayList<>();

}