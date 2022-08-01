package com.sabkar.attendance.repository;

import com.sabkar.attendance.entity.domain.Mark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface MarkRepository extends JpaRepository<Mark, Integer> {
    @Transactional(readOnly = true)
    // Optional<Mark> findByMarkDateAndStudentIdAndLessonId(LocalDate markDate, Integer studentId, Integer lessonId);
    Optional<Mark> findByMarkDateAndStudentIdAndLessonId(Mark mark);
    @Transactional(readOnly = true)
    boolean existsByMarkDateAndStudentIdAndLessonId(Mark mark);
}