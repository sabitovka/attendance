package com.sabkar.attendance.controller;

import com.sabkar.attendance.entity.transfer.MarkDto;
import com.sabkar.attendance.service.MarkService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class MarkController {
    MarkService markService;

    @PostMapping("/v1/marks")
    private ResponseEntity<MarkDto> saveMark(@Valid @RequestBody MarkDto markDto) {
        MarkDto saved = markService.saveMark(markDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/v1/marks/{id}")
    private ResponseEntity<MarkDto> updateMark(@PathVariable("id") Integer id, @RequestBody MarkDto markDto) {
        MarkDto updated = markService.updateMark(id, markDto);
        if (updated == null) {
            throw new EntityNotFoundException(String.format("Mark with ID=%d not found", id));
        }
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(updated);
    }

}
