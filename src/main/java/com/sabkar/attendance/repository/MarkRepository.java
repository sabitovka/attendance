package com.sabkar.attendance.repository;

import com.sabkar.attendance.entity.domain.Mark;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface MarkRepository extends JpaRepository<Mark, Integer> {
    List<Mark> findByMarkDateAndTaskBellIdAndTaskGroupId(Date markDate, int taskBellId, int taskGroupId);
}