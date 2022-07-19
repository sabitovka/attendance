package com.sabkar.attendance.services;

import com.sabkar.attendance.entity.domain.Discipline;
import com.sabkar.attendance.entity.transfer.DisciplineDto;
import com.sabkar.attendance.repository.DisciplineRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DisciplineService {
    private DisciplineRepository disciplineRepository;
    private ModelMapper modelMapper;

    public List<DisciplineDto> findAll() {
        return disciplineRepository.findAll().stream()
            .map(this::convertToDto)
            .collect(Collectors.toList());
    }

    public DisciplineDto findById(Integer id) {
        Discipline discipline = disciplineRepository.findById(id).orElse(null);
        if (discipline == null) {
            throw new EntityNotFoundException(String.format("Discipline with id %d not found", id));
        }
        return convertToDto(discipline);
    }

    private DisciplineDto convertToDto(Discipline discipline) {
        return modelMapper.map(discipline, DisciplineDto.class);
    }
}
