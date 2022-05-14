package com.sabkar.attendance.entity.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@Getter
@Setter
public abstract class SimpleEntity {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;
    @Column(unique = true)
    private String ability;
}