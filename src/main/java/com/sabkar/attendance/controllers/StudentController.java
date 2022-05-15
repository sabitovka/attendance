package com.sabkar.attendance.controllers;

import com.sabkar.attendance.entity.transfer.StudentDto;
import com.sabkar.attendance.services.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/api/students")
public class StudentController {

    private StudentService studentService;

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    private List<StudentDto> findStudentsByGroup(@RequestParam Integer groupId) {
        return studentService.findStudentsByGroupId(groupId);
    }


}
