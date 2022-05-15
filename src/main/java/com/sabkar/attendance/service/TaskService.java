package com.sabkar.attendance.service;

import com.sabkar.attendance.entity.domain.Task;
import com.sabkar.attendance.entity.transfer.TaskDto;
import com.sabkar.attendance.repository.TaskRepository;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TaskService {

    private TaskRepository taskRepository;
    private ModelMapper modelMapper;

    @NotNull
    public List<TaskDto> findByWeekDay(int weekDayId) {
        return taskRepository.findTasksByWeekDayId(weekDayId).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @NotNull
    private TaskDto convertToDto(Task task){
        return modelMapper.map(task, TaskDto.class);
    }

}
