package com.sabkar.attendance.controllers;

import com.sabkar.attendance.entity.transfer.StudentWithMarksDto;
import com.sabkar.attendance.services.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/api/students")
public class StudentController {

    private StudentService studentService;

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    private List<StudentWithMarksDto> findStudentsByGroup(@RequestParam Integer groupId) {
        return studentService.findStudentsByGroupId(groupId);
    }

    @GetMapping("/marks")
    private ResponseEntity<List<StudentWithMarksDto>> findStudentsMarks(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date, @RequestParam Integer groupId) {
        return ResponseEntity.ok().body(studentService.findStudentsMarks(date, groupId));
    }

}
