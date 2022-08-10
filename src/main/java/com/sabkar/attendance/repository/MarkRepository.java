package com.sabkar.attendance.repository;

import com.sabkar.attendance.entity.domain.Mark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface MarkRepository extends JpaRepository<Mark, Integer> {
    @Transactional(readOnly = true)
    Optional<Mark> findByMarkDateAndStudentIdAndLessonId(Date markDate, Integer studentId, Integer lessonId);
    @Transactional(readOnly = true)
    boolean existsByMarkDateAndStudentIdAndLessonId(Date markDate, Integer studentId, Integer lessonId);

    @Transactional(readOnly = true)
    List<Mark> findByStudentId(Integer studentId);

    @Transactional(readOnly = true)
    List<Mark> findByStudentIdAndMarkDate(Integer id, Date markDate);
}