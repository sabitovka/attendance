package com.sabkar.attendance.entity.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "persons")
@Getter
@Setter
public class Person {
    @Id
    private String passport;
    private String firstName;
    private String lastName;
    private String middleName;
}
