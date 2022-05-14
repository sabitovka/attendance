package com.sabkar.attendance.entity.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "rooms")
public class Room extends SimpleEntity{
    private int capacity;

    @OneToMany(mappedBy = "room", orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Task> tasks = new ArrayList<>();
}