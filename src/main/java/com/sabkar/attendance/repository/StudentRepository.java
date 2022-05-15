package com.sabkar.attendance.repository;

import com.sabkar.attendance.entity.domain.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {
    List<Student> findStudentsByGroupId(Integer groupId);
}