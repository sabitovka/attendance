package com.sabkar.attendance.entity.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "week_days")
@Getter
@Setter
public class WeekDay extends SimpleEntity {
    @OneToMany(mappedBy = "weekDay", orphanRemoval = true)
    private List<Task> tasks = new ArrayList<>();
}