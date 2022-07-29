package com.sabkar.attendance.repository;

import com.sabkar.attendance.entity.domain.Mark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarkRepository extends JpaRepository<Mark, Integer> {
//    List<Mark> findByMarkDateAndTaskBellIdAndTaskGroupId(Date markDate, int taskBellId, int taskGroupId);
//    @Transactional(readOnly = true)
//    List<Mark> findByMarkDateBetweenAndStudentId(LocalDate startDate, LocalDate endDate, Long studentId);
//    @Transactional(readOnly = true)
//    List<Mark> findByMarkDateBetweenAndStudentGroupId(LocalDate startDate, LocalDate endDate, Integer groupId);
}