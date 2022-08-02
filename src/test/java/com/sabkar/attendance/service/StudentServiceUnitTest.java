package com.sabkar.attendance.service;

import com.sabkar.attendance.entity.transfer.StudentDto;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class StudentServiceUnitTest {

    @Autowired
    private StudentService studentService;

    @Test
    void whenFetchAllIsCalled_shouldReturnMockedObjects() {
        List<StudentDto> students = studentService.fetchAll();
        assertNotNull(students);
        assertTrue(students.size() > 0);
    }

    @Test
    void whenFetchByIdIsCalled_shouldReturnMockedObject() {
        StudentDto studentDto = studentService.fetchById(1);
        System.out.println(studentDto);
        assertNotNull(studentDto);
        assertNotEquals("", studentDto.getFullname());
    }

    @Test
    void whenFetchByGroupId_thenReturnMockedObjects() {
        List<StudentDto> studentDto = studentService.fetchByGroupId(1);
        System.out.println(studentDto);
        assertNotNull(studentDto);
        assertTrue(studentDto.size() > 0);
        assertTrue(studentDto.stream().allMatch(student -> student.getGroupId() == 1));
    }
}