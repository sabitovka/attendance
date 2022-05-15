package com.sabkar.attendance.controllers;

import com.sabkar.attendance.entity.domain.Task;
import com.sabkar.attendance.entity.transfer.TaskDto;
import com.sabkar.attendance.services.TaskService;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("api/tasks")
@AllArgsConstructor
public class TaskController {

    private TaskService taskService;

    @GetMapping( value = "/", produces = APPLICATION_JSON_VALUE)
    public List<TaskDto> findAll() {
        return taskService.findByWeekDay(1);
    }

}
